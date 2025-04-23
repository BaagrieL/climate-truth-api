const express = require("express");
const requestLogger = require("./src/middleware/logger.middleware");
const submissionRouter = require("./src/routes/submission");
const loginRouter = require("./src/routes/auth")
const { Submission } = require("./src/model/Submission.model");
require("dotenv").config();

const APP = express();
const PORT = 1084;

APP.use(express.json());

APP.use(requestLogger);

Submission.init();

APP.get("/", (req, res) => {
    res.send("Hello World!");
});

APP.use("/submission", submissionRouter);

APP.use("/auth", loginRouter)

APP.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})