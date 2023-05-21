import react from "react";
import App from "./App";
import {render} from "enzyme";


describe("test 1", ()=>{
    let wrapper = render(<App />);
    expect(wrapper.find("Radio")).toHaveTextContent("Clockwise");
    // const rtest = screen.queryByText("Clockwis").innerHTML
})