const winston = require("winston");

const info = new winston.transports.File({
    level: 'info',
    filename: './logs/all-log.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5 MB
    maxFiles: 5,
    colorize: false,
});

const debug = new winston.transports.File({
    level: "debug",
    filename: "./logs/debug.log",
});

const error = new winston.transports.File({
    level: "error",
    filename: "./logs/error.log",
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [info, debug, error],
})

if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;
// module.exports.stream = {
//     write: (message, encoding) => {
//         logger.info(message);
//     }
// }