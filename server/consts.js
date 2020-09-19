
const dev = process.env.NODE_ENV !== 'production';
const PORT_APP = process.env.PORT_APP || 3000;
const PORT_API = process.env.PORT_API || 8000;

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
exports.MONGO_URL = dev ? process.env.MONGO_URL_DEV : process.env.MONGO_URL;

// 3rd-party
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRECT = process.env.GOOGLE_CLIENT_SECRECT;
exports.FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
exports.FACEBOOK_CLIENT_SECRECT = process.env.FACEBOOK_CLIENT_SECRECT;

// microservice
exports.RABBIT_MQ_URL = dev ? "amqp://localhost" : process.env.RABBIT_MQ_URL;