const { Router } = require("express");
const authenticateToken = require("../middleware/auth.middleware");
const athenticateAdmin = require("../middleware/authAdmin.middleware");
const { SubmissionControler } = require("../controller/Submission.controller");


const submissionRouter = Router();

const controller = new SubmissionControler();

submissionRouter.get("/", authenticateToken, controller.listAllSubmissions);

submissionRouter.get("/filter", authenticateToken, controller.getSubmissionByFilter);

submissionRouter.post("/register", authenticateToken, controller.createSubmission);

// Rotas do Admin
submissionRouter.delete("/delete/:id", authenticateToken, athenticateAdmin,controller.deleteSubmission);

submissionRouter.patch("/update/:id", authenticateToken, athenticateAdmin, controller.updateSubmission);

submissionRouter.patch("/update/:id/status", authenticateToken, athenticateAdmin, controller.updateStatus)

module.exports = submissionRouter;