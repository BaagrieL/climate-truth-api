const { AuthControler } = require("../controller/Auth.controller");
const { Router } = require("express");

const loginRouter = Router();

const authController = new AuthControler();

loginRouter.post("/login", authController.login);

loginRouter.post("/register", authController.registerUSer);

loginRouter.get("/", authController.listAllUsers)

module.exports = loginRouter;
