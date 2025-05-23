const jwt = require("jsonwebtoken");
const { UserController } = require("../controller/User.controller");

const userController = new UserController();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = userController.getById(decoded.id);
        next();
    } catch (error) {        
        return res.status(403).json({ error: "Token inválido ou expirado." });
    }
}

module.exports = authenticateToken;
