// Test away!

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Control from "./Controls";


test("Gate cannot be opened if locked", () => {
    const gate = render(<Control closed={true} locked={true}/>)
    const openButton = gate.getByText(/Open Gate/i)
    expect(openButton).toBeDisabled()
})

test("Gate cannot be locked if open", () => {
    const gate = render(<Control closed={false} locked={false}/>)
    const lockButton = gate.getByText(/Lock Gate/i)
    expect(lockButton).toBeDisabled()
})