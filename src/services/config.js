const devBaseURL = "/prod";
const proBaseURL = "/prod";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 15000;

