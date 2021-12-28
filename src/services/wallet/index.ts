import { belvoInstance } from "../index";
import { belvoAuthInstance } from "../auth";

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
  const auth = await belvoAuthInstance.post(
    "token?grant_type=client_credentials"
  );
  const { data } = await belvoInstance.get(`/wallet`, {
    headers: {
      Authorization: `Bearer ${auth.data.access_token}`,
    },
  });

  return data;
};

export default getWallet;
