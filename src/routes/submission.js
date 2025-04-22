const { Router } = require("express");
const { authenticateToken }  = require("../middleware/auth.middleware");
const { SubmissionControler } = require("../controller/Submission.controller");


const submissionRouter = Router();

const controller = new SubmissionControler();

submissionRouter.get("/", controller.listAllSubmissions);

submissionRouter.get("/filter", authenticateToken, controller.getSubmissionByFilter);

submissionRouter.post("/register", controller.createSubmission);

submissionRouter.delete("/delete/:id", controller.deleteSubmission);

submissionRouter.patch("/update/:id", controller.updateSubmission);

module.exports = submissionRouter;