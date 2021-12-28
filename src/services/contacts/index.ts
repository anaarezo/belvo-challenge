import { belvoInstance } from "../index";
import { belvoAuthInstance } from "../auth";

export interface IContactsResponse {
  email: string;
  name: string;
}

const getContacts = async (): Promise<IContactsResponse> => {
  const auth = await belvoAuthInstance.post(
    "token?grant_type=client_credentials"
  );
  const { data } = await belvoInstance.get(`/contacts`, {
    headers: {
      Authorization: `Bearer ${auth.data.access_token}`,
    },
  });

  return data;
};

export default getContacts;
