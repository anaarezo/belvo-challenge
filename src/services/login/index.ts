import { belvoInstance } from "../index";

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
}

const postLogin = async (params: ILoginRequest): Promise<ILoginResponse> => {
  const { data } = await belvoInstance.post(`/login`, params);

  return data;
};

export default postLogin;
