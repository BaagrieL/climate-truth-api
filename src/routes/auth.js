const { login } = require("../controller/Auth.controller");
const { Router } = require("express");

const loginRouter = Router();

loginRouter.post("/login", login);

loginRouter.post("/register", );

module.exports = loginRouter;
