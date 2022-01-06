import * as React from "react";

import { render } from "@testing-library/react";
import ReceiveCrypto from "..";

const component = () => render(<ReceiveCrypto />);

describe("Render - Page - ReceiveCrypto", () => {
  it("should render screen ReceiveCrypto", () => {
    const { getByText } = component();
    // expect(getByText("ReceiveCrypto")).toBeTruthy();
  });

  it("should render contacts", () => {
    //TODO: mock contacts to verify
  });

  it("should send request to receive crypto currency", () => {
    //TODO: mock
  });
});
