import * as React from "react";

import { render } from "@testing-library/react";
import Wallet from "..";

const component = () => render(<Wallet />);

describe("Render - Page - Wallet", () => {
  it("should render screen Wallet", () => {
    const { getByText } = component();
    expect(getByText("Wallet")).toBeTruthy();
  });
});
