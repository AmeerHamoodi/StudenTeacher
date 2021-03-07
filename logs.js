const { createLogger, transports } = require("winston");

const logger = createLogger({
    transports: [
        new transports.File({ filename: "combined.log" })
    ],
    exceptionHandlers: [
        new transports.File({ filename: "exceptions.log" })
    ]
});

console.log = logMessage => {
    logger.info(logMessage);
};

console.error = logMessage => {
    logger.error(logMessage);
}