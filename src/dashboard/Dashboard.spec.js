// Test away

import React from "react";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import DashBoard from "./Dashboard";

test("Matches snapshot", () => {
    const component = render(<DashBoard />)
    expect(component).toMatchSnapshot();
})