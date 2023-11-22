import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/AppStore";
import { BrowserRouter } from "react-router-dom";
test("should render Header component with login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
	const loginButton = screen.getByRole("button", { name: "Login" });
	expect(loginButton).toBeInTheDocument();
});

test("should render cart with 0 items", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
	const items = screen.getByText("0");
    expect(items).toBeInTheDocument();
});

test("should login button text change into logout on click it",()=>{
    render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
}); 

