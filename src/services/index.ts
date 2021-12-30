import axios, { AxiosRequestConfig } from "axios";
import { BELVO_URL } from "../envs";

export let belvoInstance = axios.create({
  baseURL: BELVO_URL,
  headers: {
    "content-type": "application/json",
  },
  timeout: 30000,
});

export const authenticate = (token: string): void => {
  belvoInstance = axios.create({
    baseURL: BELVO_URL,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    timeout: 30000,
  });
};

belvoInstance.interceptors.request.use((req: AxiosRequestConfig) => {
  const info = `${req.method?.toUpperCase()} ${req.baseURL}${req.url}`;
  console.log("INTERCEPTORS", info, req);
  return req;
});

export { default as getContacts } from "./contacts";
export { default as postLogin } from "./login";
export { default as postRequest } from "./requesting";
export { default as postSending } from "./sending";
export { default as getWallet } from "./wallet";
