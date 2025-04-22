const jwt = require("jsonwebtoken");

function login(req, res) {
    const { username, password } = req.body;

    // Esse é só um exemplo simplificado, sem banco
    if (username === "admin" && password === "1234") {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
    }

    return res.status(401).json({ error: "Credenciais inválidas" });
}

module.exports = { login };
