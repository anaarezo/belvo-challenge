import * as React from "react";

import { render } from "@testing-library/react";
import Login from "..";

const component = () => render(<Login />);

describe("Render - Page - Login", () => {
  it("should render screen Login", () => {
    const { queryAllByText, getByText } = component();
    expect(
      queryAllByText("Enter the world of crypto currencies with Open Banking")
    ).toBeTruthy();
    expect(getByText("Username")).toBeTruthy();
    expect(getByText("Password")).toBeTruthy();
    expect(getByText("Sign in")).toBeTruthy();
  });

  it("Should display error message when trying to sign up with empty field", () => {
    const { getByText } = component();
  });
});
