const { User } = require("../model/User.model");

class UserController {
    updateStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
    
        try {
            Submission.setStatus(id, status);
            return res.json({ message: "Status updated successfully" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }      
    }

    getById(id) {
        if (!id) return null;

        const user = User.getUserById(id);

        if (!user) return null;

        return user;
    }
}

module.exports = { UserController };