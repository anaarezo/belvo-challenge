import { belvoInstance } from "../index";
import { belvoAuthInstance } from "../auth";

export interface ISendingRequest {
  username: string;
  password: string;
}

const postSending = async (): Promise<ISendingRequest> => {
  const auth = await belvoAuthInstance.post(
    "token?grant_type=client_credentials"
  );
  const { data } = await belvoInstance.post(`/wallet/send`, {
    headers: {
      Authorization: `Bearer ${auth.data.access_token}`,
    },
  });

  return data;
};

export default postSending;
