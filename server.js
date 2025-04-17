const express = require("express");
const requestLogger = require("./src/middleware/logger.middleware");
const submissionRouter = require("./src/routes/submission");

const APP = express();
const PORT = 1084;

APP.use(express.json());

APP.use(requestLogger);

APP.get("/", (req, res) => {
    res.send("Hello World!");
});

APP.use("/submission", submissionRouter);

APP.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})