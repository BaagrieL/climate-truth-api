const logger = require("../util/Logger");

function requestLogger(req, res, next) {
    const { method, originalUrl } = req;

    logger.info(`${method}\t${originalUrl}`);

    next();
}

module.exports = requestLogger;
