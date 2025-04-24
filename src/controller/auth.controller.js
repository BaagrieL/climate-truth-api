const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid")
const { User } = require("../model/User.model");

class AuthControler {
    login(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const user = User.verifyUserData(username, password);
        
        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ token });
    }

    // TODO: Hash password before saving
    // TODO: Add conditions to make a password
    registerUSer(req, res) {
        const { username, password, role = "user" } = req.body;

        if (!username || !password) return res.status(400).json({ error: "Username and password are required" });
        
        if (User.userExists(username)) {
            return res.status(409).json({ error: "Username already exists" });
        }
    
        const newUser = new User({ id: uuid(), username, password });
        User.save(newUser);

        return res.status(201).json({ message: "User created successfully" });
    }

    listAllUsers(req, res) {
        return res.status(200).json(User.list());
    }
}

module.exports = { AuthControler };
