/**
 * Represents the submissions of the system.
 * @class Submission
 */
class Submission {
    static #_submissions = new Map();

    /**
     * Create a new submission.
     * @param {{ id: string, title: string, content: string, type: string }} data - The data of the submission.
     */
    constructor({ id, title, content, type }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type;
    }

    /**
     * List all submissions.
     * @returns {Submission[]} The list of submissions.
     */
    static list() {
        return Array.from(this.#_submissions.values());
    }

    static listBytitle(title) {
        return Array.from(this.#_submissions.values()).filter(submission => submission.title === title);
    }

    /**
     * Add a submission to the list of submissions.
     * @param {Submission} submission - The submission to add.
     */
    static save(submission) {
        this.#_submissions.set(submission.id, submission);
    }

    /**
     * Delete a submission by its id.
     * @param {string} id - The id of the submission to delete.
     * @returns {Submission | null} The deleted submission or null if not found.
     */
    static delete(id) {
        const deleted = this.#_submissions.delete(id);
        return deleted ? new Submission({ id }) : null;
    }

    /**
     * Update a submission by its id.
     * @param {string} id - The id of the submission to update.
     * @param {Object} newData - The new data to update.
     * @returns {Submission | null} The updated submission or null if not found.
     */
    static update(id, newData) {
        const submission = this.#_submissions.get(id);
        if (!submission) return null;

        submission.title = newData.title ?? submission.title;
        submission.content = newData.content ?? submission.content;

        return submission;
    }

    /**
     * Retrieve a submission by its id.
     * @param {string} id - The id of the submission.
     * @returns {Submission | undefined} The submission or undefined if not found.
     */
    static getById(id) {
        return this.#_submissions.get(id);
    }
}

module.exports = { Submission };

