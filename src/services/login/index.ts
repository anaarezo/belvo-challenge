import { belvoInstance } from "../index";
import { belvoAuthInstance } from "../auth";

export interface ILoginRequest {
  username: string;
  password: string;
}

const postLogin = async (): Promise<ILoginRequest> => {
  const auth = await belvoAuthInstance.post(
    "token?grant_type=client_credentials"
  );
  const { data } = await belvoInstance.post(`/login`, {
    headers: {
      Authorization: `Bearer ${auth.data.access_token}`,
    },
  });

  return data;
};

export default postLogin;
