

const DEV = process.env.NODE_ENV === "development";
const PORT = process.env.PORT || 3000;
const APP_URL = DEV ? `http://localhost${PORT}` : process.env.APP_URL;

const SESSION_SECRET = "SESSION_SECRET";
const TOKEN_KEY = DEV ? 'hoangduy' : process.env.TOKEN_KEY;
const MONGO_URL = DEV ? 
    "mongodb+srv://hoangduy:hoangduy123@cluster0-4ebzu.mongodb.net/DEV?retryWrites=true&w=majority"
    :
    process.env.MONGO_URL;


// 3th party authenrization
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "xxxxxxxxx";
const GOOGLE_CLIENT_SECRECT = process.env.GOOGLE_CLIENT_SECRECT || "xxxxxxxxx";
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID || "xxxxxxxxx";

// microservice
// const RABBIT_MQ_URL = DEV ? "amqp://localhost" : process.env.RABBIT_MQ_URL;

module.exports = {
    DEV, PORT, APP_URL, TOKEN_KEY, MONGO_URL, SESSION_SECRET,
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT, FACEBOOK_CLIENT_ID,
}


