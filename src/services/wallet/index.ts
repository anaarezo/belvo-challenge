import { belvoInstance } from "../index";

export interface IWalletResponse {
  email: string;
  transactions: [
    {
      description: string;
      amount: number;
      currency: string;
      sender: string;
      receiver: string;
      status: string;
    }
  ];
  balance: {
    property1: number;
    property2: number;
  };
}

const getWallet = async (): Promise<IWalletResponse> => {
  const { data } = await belvoInstance.get(`/wallet`);
  console.log("getWallet", data);

  return data;
};

export default getWallet;
