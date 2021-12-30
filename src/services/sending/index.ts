import { belvoInstance } from "../index";

export interface ISendingRequest {
  description: string;
  amount: number;
  currency: string;
  receiver: string;
}

export interface ISendingResponse {}

const postSending = async (
  params: ISendingRequest
): Promise<ISendingResponse> => {
  const { data } = await belvoInstance.post(`/wallet/send`, params);

  return data;
};

export default postSending;
