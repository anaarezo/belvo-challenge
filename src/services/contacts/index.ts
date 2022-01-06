import { belvoInstance } from "../index";

export interface IContactResponse {
  email: string;
  name: string;
}

const getContacts = async (): Promise<IContactResponse[]> => {
  const { data } = await belvoInstance.get(`/contacts`);

  return data;
};

export default getContacts;
