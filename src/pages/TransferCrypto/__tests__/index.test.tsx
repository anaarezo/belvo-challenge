import * as React from "react";

import { render, fireEvent } from "@testing-library/react";
import TransferCrypto from "..";

const component = () => render(<TransferCrypto />);

describe("Render - Page - TransferCrypto", () => {
  it("should render screen TransferCrypto", () => {
    const { getByText } = component();
    // expect(getByText("TransferCrypto")).toBeTruthy();
  });

  it("should render contacts", () => {
    //TODO: mock contacts to verify
  });

  it("should send crypto currency to  contact selected", () => {
    //TODO: mock
  });
});
