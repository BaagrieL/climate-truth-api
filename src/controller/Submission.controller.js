const { Submission } = require("../model/Submission.model");
const { v4: uuid } = require("uuid");

class SubmissionControler {
    listAllSubmissions(req, res) {
        return res.status(200).json(Submission.list());
    }

    getSubmissionByFilter(req, res) {
        const { id, title } = req.query;
        
        let submission = null;

        if(id) {
            submission = Submission.getById(id);
        } else if(title) {
            submission = Submission.listBytitle(title);
        } else {
            return res.status(400).json({ message: "Id or title is required." });
        }

        if (!submission) {
            return res.status(404).json({ message: "Submission not found." });
        }

        return res.status(200).json({ message: "Submission found.", submission});
    }


    createSubmission(req, res) {
        const { title, content, type } = req.body;
        
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const submission = new Submission({ id: uuid(), title, content, type });
        Submission.save(submission);

        return res.status(201).json({ message: "Submission created successfully.", submission });
    }

    deleteSubmission(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Id is required." });
        }

        const submission = Submission.delete(id);
        
        if (!submission) {
            return res.status(404).json({ message: "Submission not found." });
        }

        return res.status(200).json({ message: "Submission deleted successfully.", submission });
    }


    updateSubmission(req, res) {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Id is required." });
        }

        const submission = Submission.update(id, { title, content });

        if (!submission) {
            return res.status(404).json({ message: "Submission not found." });
        }

        return res.status(200).json({ message: "Submission updated successfully.", submission });
    }

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
}

module.exports = { SubmissionControler };