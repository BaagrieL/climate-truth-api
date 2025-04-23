const StorageManager = require("../util/StorageManager");

class User {
    static #_users = new Map();
    static #_userStorage = new StorageManager("users.json");

    /**
     * Creates a new user.
     * @param {{ id: string, username: string, password: string, role: number }} data - The data of the user. The role property is an integer that represents the user's role in the system.
     */
    constructor({ id, username, password, role }) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    init() {
        const storedUsers = User.#_userStorage.read();

        if (!storedUsers.length) return;
        
        for (const data of storedUsers) {
            const user = new User(data[1]);
            User.#_users.set(user.id, user);
        }
    }

    /**
     * List all users.
     * @returns {User[]} The list of users.
     */
    list() {
        return Array.from(User.#_users.values());
    }

    /**
     * Retrieve a user by its id.
     * @param {string} id - The id of the user.
     * @returns {User | null} The user or null if not found.
     */
    getUserById(id) {
        const user = User.#_users.get(id);

        if (!user) return null;

        return User.#_users.get(id);
    }


    /**
     * Checks if a user with the given username exists in the system.
     * @param {string} username - The username to check.
     * @returns {boolean} True if the user exists, false otherwise.
     */
    userExists(username) {
        function usernameExists(username) {
            for (const user of User.#_users.values()) {
                if (user.username === username) return true;
            }
            return false;
        }        
    }


    /**
     * Verifies if a user with the given username and password exists in the system.
     * @param {string} username - The username to verify.
     * @param {string} password - The password to verify.
     * @returns {User | null} The user if found, null otherwise.
     */
    verifyUserData( username, password ) {
        if (!username || !password) return null;

        for (const user of User.#_users.values()) {
            if (user.username === username && user.password === password) return user;
        }

        return null;
    }


    save(user) {
        User.#_users.set(user.id, user);
        User.#_userStorage.write(Array.from(User.#_users));
    }

    /**
     * Deletes a user by their id.
     * @param {string} id - The id of the user to delete.
     * @returns {User | null} The deleted user or null if not found.
     */

    delete(id) {
        const deleted = User.#_users.delete(id);

        if (!deleted) return null;
        
        User.#_userStorage.write(Array.from(User.#_users));
        return new User({ id });
    }

    /**
     * Updates a user by its id.
     * @param {string} id - The id of the user to update.
     * @param {Object} newData - The new data to update. The username, password and role properties are optional.
     * @returns {User | null} The updated user or null if not found.
     */
    update(id, newData) {
        const user = User.#_users.get(id);

        if (!user) return null;

        const newName = newData.username ?? user.username;
        const newPassword = newData.password ?? user.password;
        const newRole = newData.role ?? user.role;


        User.#_users.set(id, new User({ id, username: newName, password: newPassword, role: newRole }));

        User.#_userStorage.write(Array.from(User.#_users));

        return User.#_users.get(id);
    }

}