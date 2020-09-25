const logger = require("../utils/logger");

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}

module.exports = function mongoConfig(MONGO_URL, mongoose) {
    mongoose
        .connect(
            MONGO_URL,
            options,
            () => logger.info("Connected Mongo Database!"))
    // .catch(err => logger.error(err));
}