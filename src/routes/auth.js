const { AuthControler } = require("../controller/Auth.controller");
const { Router } = require("express");
const authenticateToken = require("../middleware/auth.middleware");
const authenticateAdmin = require("../middleware/authAdmin.middleware");

const loginRouter = Router();

const authController = new AuthControler();

// Rotas Públicas
loginRouter.post("/login", authController.login);

loginRouter.post("/register", authController.registerUSer);

// Rotas Privadas
loginRouter.get("/users", authenticateToken, authenticateAdmin, authController.listAllUsers)

loginRouter.patch("/update/:id/role", authenticateToken, authenticateAdmin, authController.updateUserRole)

module.exports = loginRouter;
