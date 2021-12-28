import axios, { AxiosRequestConfig } from "axios";
import { BELVO_URL } from "../envs";

export const belvoInstance = axios.create({
  baseURL: BELVO_URL,
  headers: {
    "content-type": "application/json",
  },
  timeout: 12000,
});

belvoInstance.interceptors.request.use((req: AxiosRequestConfig) => {
  const info = `${req.method?.toUpperCase()} ${req.baseURL}${req.url}`;
  console.log(info);
  return req;
});

export { default as getContacts } from "./contacts";
export { default as postLogin } from "./login";
export { default as postRequest } from "./requesting";
export { default as postSending } from "./sending";
export { default as getWallet } from "./wallet";
