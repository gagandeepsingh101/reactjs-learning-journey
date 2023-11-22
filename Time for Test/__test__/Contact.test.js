import { render,screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";
describe('Checking Contact page Component', () => {
  it('Should rendered Component', () => {
    render(<Contact />);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  })
  test('Should rendered All Input Elements', () => {
    render(<Contact />);
    const input=screen.getAllByRole("textbox");
    expect(input).toHaveLength(2);
  })
  
  test('should rendered Submit Button ', () => {
    render(<Contact />);
    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  })
})

