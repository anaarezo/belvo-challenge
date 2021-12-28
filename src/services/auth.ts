import axios from "axios";
import { BELVO_AUTH, BELVO_CLIENT_ID, BELVO_CLIENT_SECRET } from "../envs";

const base64 = Buffer.from(
  `${BELVO_CLIENT_ID}:${BELVO_CLIENT_SECRET}`
).toString("base64");

export const belvoAuthInstance = axios.create({
  baseURL: BELVO_AUTH,
  headers: {
    "Content-Type": "content/json",
    Authorization: `Basic ${base64}`,
  },
});

// {
//     "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWNreSIsImV4cCI6MTY0MDY0MjM0Mn0.Ch00mtQerayMm2DmH4cShxJh4wVDX7qdM6PH3SJE0Irx-_9RrAs_lsyI-zuzDINbXf_URbt1WxWDuZEglsONfw",
//     "token_type": "bearer"
// }
