const jwt = require("jsonwebtoken");
const { User } = require("../model/User.model");

class AuthControler {
    login(req, res) {
        const { username, password } = req.body;

        if (!username || !password) return res.status(401).json({ error: "Credenciais inválidas" });

        if(!User.userExists(username)) return res.status(401).json({ error: "Invalid username or password"});

        const user = new User( username, password );


    }

    registerUSer(req, res) {
        const { username, password } = req.body;

        if (!username || !password) return res.status(401).json({ error: "Credenciais inválidas" });
        
        if (User.userExists(username)) {
            return res.status(401).json({ error: "Username alredy exists" });
        }
    
        const newUser = new User({ username, password });
        User.save(newUser);

        return res.status(201).json({ message: "User created successfully" });
    }
}


module.exports = { AuthControler };
