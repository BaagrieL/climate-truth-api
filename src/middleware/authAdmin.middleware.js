
function authenticateAdmin(req, res, next) {    
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Acesso negado: apenas administradores." });
    }
    next();
}

module.exports = authenticateAdmin;
