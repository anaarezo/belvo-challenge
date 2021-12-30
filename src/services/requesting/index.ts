import { belvoInstance } from "../index";

export interface IRequestingRequest {
  description: string;
  amount: number;
  currency: string;
  sender: string;
}
export interface IRequestingResponse {}

const postRequest = async (
  params: IRequestingRequest
): Promise<IRequestingResponse> => {
  const { data } = await belvoInstance.post(`/wallet/request`, params);

  return data;
};

export default postRequest;
