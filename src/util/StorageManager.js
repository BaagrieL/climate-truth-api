const fs = require("fs");
const path = require("path");

/**
 * StorageManager is a class that manages data storage in a JSON file.
 * a "mini dataBase"
 */
class StorageManager {
    /**
     * Constructor for StorageManager
     * @param {string} filename - The name of the file to store data in.
     */
    constructor(filename) {
        // Caminho do arquivo dentro do diretório "data"
        this.filePath = path.join(__dirname, "..", "data", filename);
        this.ensureDirectoryExists(); // Verifica e cria o diretório, se necessário
        this.ensureFileExists(); // Verifica e cria o arquivo, se necessário
    }

    /**
     * Ensures the directory exists. If it doesn't, creates it.
     */
    ensureDirectoryExists() {
        const dirPath = path.dirname(this.filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true }); // Cria o diretório, se não existir
        }
    }

    /**
     * Ensures the file exists, if not creates it with an empty array.
     */
    ensureFileExists() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, "[]", "utf-8"); // Cria o arquivo com um array vazio
        }
    }

    /**
     * Reads the data from the file and returns it as an array.
     * @returns {array} The data in the file.
     */
    read() {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }

    /**
     * Writes the data to the file.
     * @param {array} dataArray - The data to write to the file.
     */
    write(dataArray) {
        fs.writeFileSync(this.filePath, JSON.stringify(dataArray, null, 2), "utf-8");
    }
}

module.exports = StorageManager;
