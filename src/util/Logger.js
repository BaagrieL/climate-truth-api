const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");

// Path to the log directory
const logDir = path.join(__dirname, "..", "logs");

// Create the log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            const methodWidth = 7; // Tamanho fixo para o método (exemplo: GET, POST, etc.)
            const urlWidth = 40; // Tamanho fixo para a URL
            
            // Necessário para alinhar o método e a URL
            const methodAligned = message.split("\t")[0].padEnd(methodWidth);
            const urlAligned = message.split("\t")[1].padEnd(urlWidth);
            
            return `[${timestamp}]\t${level.toUpperCase()}\t${methodAligned}\t${urlAligned}`;
        })
    ),
    transports: [
        new transports.File({ filename: path.join(logDir, "api.log") })
    ]
});

module.exports = logger;
