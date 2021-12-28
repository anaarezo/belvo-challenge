import * as React from "react";

import { render } from "@testing-library/react";
import Contacts from "..";

const component = () => render(<Contacts />);

describe("Render - Page - Contacts", () => {
  it("should render screen Contacts", () => {
    const { getByText } = component();
    expect(getByText("Contacts")).toBeTruthy();
  });
});
