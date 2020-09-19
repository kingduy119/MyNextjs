const dev = process.env.NODE_ENV !== "production";

const API_URL = dev ? "http://localhost:8000" : process.env.API_URL;
const APP_URL = dev ? "http://localhost:3000" : process.env.APP_URL;


export { API_URL, APP_URL };
