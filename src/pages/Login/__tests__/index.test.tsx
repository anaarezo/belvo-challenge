import * as React from "react";

import { render } from "@testing-library/react";
import Login from "..";

const component = () => render(<Login />);

describe("Render - Page - Login", () => {
  it("should render screen Login", () => {
    const { getByPlaceholderText } = component();
    // expect(getByPlaceholderText("Username")).toBeTruthy();
    // expect(getByPlaceholderText("Password")).toBeTruthy();
  });

  it("should click to sign in", () => {
    //TODO: Redirect to /wallet
  });

  it("should open alert component in case of error", () => {
    //TODO: Text: Error trying sign in!
  });
});
