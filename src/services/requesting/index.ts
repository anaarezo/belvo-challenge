import { belvoInstance } from "../index";
import { belvoAuthInstance } from "../auth";

export interface IRequestingRequest {
  description: string;
  amount: number;
  currency: string;
  sender: string;
}

const postRequest = async (): Promise<IRequestingRequest> => {
  const auth = await belvoAuthInstance.post(
    "token?grant_type=client_credentials"
  );
  const { data } = await belvoInstance.post(`/wallet/request`, {
    headers: {
      Authorization: `Bearer ${auth.data.access_token}`,
    },
  });

  return data;
};

export default postRequest;
