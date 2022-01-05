import * as React from "react";

import { render } from "@testing-library/react";
import Wallet from "..";

const component = () => render(<Wallet />);

const mockResponse = {
  email: "victoria@belvo.com",
  transactions: [
    {
      description: "Hello, i am sending Bitcoins",
      amount: 0.1,
      currency: "BTC",
      sender: "victoria@belvo.com",
      receiver: "pablo@belvo.com",
      status: "Done",
    },
  ],
  balance: {
    ETH: 15,
    DOGE: 0,
    BTC: 0.4,
  },
};

describe("Render - Page - Wallet", () => {
  it("should render screen Wallet", () => {
    const { getByText } = component();
    expect(getByText("Wallet")).toBeTruthy();
  });
});
