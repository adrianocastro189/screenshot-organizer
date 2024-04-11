/**
 * A utility class for file operations.
 */
class Files {
    /**
     * Creates a new Files instance.
     */
    constructor() {
        this.fs = require('fs');
    }

    /**
     * Copies a file from source to destination.
     * 
     * This is just a facade for fs.readFileSync().
     * 
     * @param {string} source 
     * @param {string} destination 
     */
    copy(source, destination) {
        this.fs.copyFileSync(source, destination);
    }
}

module.exports = Files;