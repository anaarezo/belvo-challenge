import * as React from "react";

import { render } from "@testing-library/react";
import NotFound from "..";

const component = () => render(<NotFound />);

describe("Render - Page - NotFound", () => {
  it("should render screen NotFound", () => {
    const { getByText } = component();
    expect(getByText("Page not found!!!")).toBeTruthy();
    expect(getByText("Go back")).toBeTruthy();
  });

  it("should render navigate back to Login Page", () => {});
});
