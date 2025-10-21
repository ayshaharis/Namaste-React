import { render,screen } from "@testing-library/react"
 import "@testing-library/jest-dom"
import Contact from "../components/Contact";

test("should render contact us component ",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading");
    expect(heading).toBe;

});



