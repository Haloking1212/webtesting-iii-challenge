// Test away!

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
import Controls from "../controls/Controls";
import Dashboard from "../dashboard/Dashboard";

test("Matches snapshot", () => {
    const component = render(<Display />)
    expect(component).toMatchSnapshot();
})

test("displays closed if the prop closed is true", () => {
    const gate = render(<Display closed={true}/>)
    const lockedGate = gate.getByText(/Closed/i)
    expect(lockedGate)
})

test("displays Locked if the prop lock is true", () => {
    const gate = render(<Display locked={true}/>)
    const lockedGate = gate.getByText(/Locked/i)
    expect(lockedGate)
})
