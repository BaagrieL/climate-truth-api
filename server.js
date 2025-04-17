const express = require("express");
const submissionRouter = require("./src/routes/submission");

const APP = express();
const PORT = 1084;

APP.use(express.json());

APP.get("/", (req, res) => {
    res.send("Hello World!");
});

APP.use("/submission", submissionRouter);

APP.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})