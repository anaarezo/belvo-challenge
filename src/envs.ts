// Non required props

declare type nodeEnv = "production" | "development" | "test";

export const NODE_ENV = (process.env.NODE_ENV || "development") as nodeEnv;
export const PORT = parseInt(process.env.PORT || "3000", 10);

export const BELVO_URL = process.env.BELVO_URL as string;
export const BELVO_AUTH = process.env.BELVO_AUTH as string;
export const BELVO_CLIENT_ID = process.env.BELVO_CLIENT_ID as string;
export const BELVO_CLIENT_SECRET = process.env.BELVO_CLIENT_SECRET as string;
