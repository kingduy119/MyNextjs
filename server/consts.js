
const dev = true;//process.env.NODE_ENV !== 'production';
const PORT_APP = 3000;//process.env.PORT_APP || 3000;
const PORT_API = 8000;//process.env.PORT || 8000;

exports.DEV = dev;
exports.PORT_APP = PORT_APP;
exports.PORT_API = PORT_API;
exports.SESSION_SECRET = 'xxxxxxxxx';

// APP
exports.URL_APP = dev ? process.env.DEV_URL_APP || `https://localhost:${PORT_APP}` : process.env.PROD_URL_APP;

// API
exports.URL_API = dev ? process.env.DEV_URL_API || `https://localhost:${PORT_API}` : process.env.PROD_URL_API;
exports.TOKEN_KEY = dev ? 'hoangduy' : process.env.TOKEN_KEY;

// Database
exports.MONGO_URL =
    "mongodb+srv://hoangduy:hoangduy123@cluster0-4ebzu.mongodb.net/DEV?retryWrites=true&w=majority";
//dev ? process.env.MONGO_URL_DEV : process.env.MONGO_URL;

// 3rd-party
exports.GOOGLE_CLIENT_ID =
    "672913498119-3ar8seeah2kv98hip8if127j3d959ego.apps.googleusercontent.com";
//process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRECT =
    "gGbet71BJE9X_Of9Giihbquh";
//process.env.GOOGLE_CLIENT_SECRECT;
exports.FACEBOOK_CLIENT_ID =
    "191424528822654";
//process.env.FACEBOOK_CLIENT_ID;
exports.FACEBOOK_CLIENT_SECRECT =
    "4e3a6fed6cda2dd5c29490d519ee135c";
//process.env.FACEBOOK_CLIENT_SECRECT;

// microservice
// exports.RABBIT_MQ_URL = dev ? "amqp://localhost" : process.env.RABBIT_MQ_URL;