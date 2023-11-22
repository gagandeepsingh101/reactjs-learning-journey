import { act } from "react-dom/test-utils";
import RestroMenu from "../src/components/RestroMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import menuMockData from "./mockdata/menuMockData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/AppStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(menuMockData),
	});
});

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
  }));
  
it("should render Menu Page", async () => {
	await act(async () => {
		return render(
			<Provider store={appStore}>
				<BrowserRouter>
					<Header/>
					<RestroMenu/>
				</BrowserRouter>
			</Provider>
		);
	});
	const name = screen.getByText("Beverages");
	expect(name).toBeInTheDocument();
	fireEvent.click(name);

	const itemslist = screen.getAllByTestId("menu");
	expect(itemslist.length).toBe(21);

	const addItemBtn = screen.getAllByRole("button", { name: "Add+" });
	expect(addItemBtn.length).toBe(21);
	fireEvent.click(addItemBtn[0]);

});
