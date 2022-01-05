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
    BTC: number;
    DOGE: number;
    ETH: number;
  };
}

const getWallet = async (): Promise<IWalletResponse> => {
  const { data } = await belvoInstance.get(`/wallet`);
  console.log("getWallet", data);

  return data;
};

export default getWallet;
