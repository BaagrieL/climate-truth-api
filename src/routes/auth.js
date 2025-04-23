const { login } = require("../controller/auth.controller");
const { Router } = require("express");

const loginRouter = Router();

loginRouter.post("/", login);

module.exports = loginRouter;
