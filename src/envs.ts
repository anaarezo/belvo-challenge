declare type nodeEnv = "production" | "development" | "test";

export const NODE_ENV = (process.env.NODE_ENV || "development") as nodeEnv;
export const PORT = parseInt(process.env.PORT || "3000", 10);

//TODO: This environment variable should be using some lib like dotenv to be in a safer place like a secret
export const BELVO_URL = "https://belvo-wallet-challenge-api.herokuapp.com";
