import { render,screen } from "@testing-library/react"
import RestroCard, { withVegLabelCard } from "../src/components/RestroCard"
import mockdata from "./mockdata/mockdata.json";
import "@testing-library/jest-dom"

test('should render Resturant Card with props', () => {
  render(<RestroCard resData={mockdata}></RestroCard>)
  const name=screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
})

test('should render Resturant Card with promoted label', () => {
    const WithVegLabelRestraunatCard=withVegLabelCard(RestroCard);
  render(<WithVegLabelRestraunatCard resData={mockdata}></WithVegLabelRestraunatCard>)
  const name=screen.getByRole("heading",{name:"Veg"});
  expect(name).toBeInTheDocument();
})


