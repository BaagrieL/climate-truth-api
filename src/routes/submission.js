const { Router } = require("express");
const authenticateToken = require("../middleware/auth.middleware");
const { SubmissionControler } = require("../controller/Submission.controller");


const submissionRouter = Router();

const controller = new SubmissionControler();

submissionRouter.get("/", controller.listAllSubmissions);

submissionRouter.get("/filter", controller.getSubmissionByFilter);

submissionRouter.post("/register", controller.createSubmission);

submissionRouter.delete("/delete/:id", authenticateToken, controller.deleteSubmission);

submissionRouter.patch("/update/:id", authenticateToken, controller.updateSubmission);

submissionRouter.patch("/update/:id/status", authenticateToken, controller.updateStatus)

module.exports = submissionRouter;