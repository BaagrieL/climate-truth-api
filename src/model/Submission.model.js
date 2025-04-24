const StorageManager = require("../util/StorageManager");

/**
 * Represents the submissions of the system.
 * @class Submission
*/
class Submission {
    static #_submissions = new Map();

    static #_submissionStorage = new StorageManager("submissions.json");

    /**
     * Initialize the submission store by reading the stored data from the file system.
     * If there are no stored submissions, it does nothing.
     * Necessary to ensure the map is up to date with the database.
     */
    static init() {
        const storedSubmissions = this.#_submissionStorage.read();

        if (!storedSubmissions.length) return;
        
        for (const data of storedSubmissions) {
            const submission = new Submission(data[1]);
            this.#_submissions.set(submission.id, submission);
        }                
    }

    /**
     * Create a new submission.
     * @param {{ id: string, title: string, content: string, type: string }} data - The data of the submission.
     */
    constructor({ id, title, content, type }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type;
        this.status = "pendente";
    }

    /**
     * List all submissions.
     * @returns {Submission[]} The list of submissions.
     */
    static list() {
        return Array.from(this.#_submissions.values());
    }

    static listBytitle(title) {
        return Array.from(this.#_submissions.values()).filter(submission => submission.title.toLowerCase() === title.toLowerCase());
    }

    /**
     * Add a submission to the list of submissions.
     * @param {Submission} submission - The submission to add.
     */
    static save(submission) {
        this.#_submissions.set(submission.id, submission);
        this.#_submissionStorage.write(Array.from(this.#_submissions));
    }

    /**
     * Delete a submission by its id.
     * @param {string} id - The id of the submission to delete.
     * @returns {Submission | null} The deleted submission or null if not found.
     */
    static delete(id) {
        const deleted = this.#_submissions.delete(id);
        
        if (!deleted) return null;

        this.#_submissionStorage.write(Array.from(this.#_submissions));

        return new Submission({ id });
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
        submission.type = newData.type ?? submission.type;
        submission.status = newData.status ?? submission.status;

        this.#_submissionStorage.write(Array.from(this.#_submissions));

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

    /**
     * Updates the status of a submission by its id.
     * @param {string} id - The id of the submission to update.
     * @param {string} status - The new status of the submission.
     * @throws {Error} If the submission is not found.
     * @throws {Error} If the status is not provided.
     */
    static setStatus(id, status) {
        const submission = this.getById(id);
        if (!submission) throw new Error("Submission not found");
        if (!status) throw new Error("Status is required")
        
        submission.status = status;
        this.update(id, submission);
    }
    
}

module.exports = { Submission };

