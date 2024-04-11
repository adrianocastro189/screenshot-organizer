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

    /**
     * Deletes a file.
     * 
     * This is just a facade for fs.unlinkSync().
     * 
     * @param {string} file 
     */
    delete(file) {
        this.fs.unlinkSync(file);
    }

    /**
     * Lists the contents of a directory.
     * 
     * This is just a facade for fs.readdirSync().
     * 
     * @param {string} directory 
     * @returns {string[]}
     */
    list(directory) {
        return this.fs.readdirSync(directory);
    }

    /**
     * Lists the screenshots in a directory.
     * 
     * To be a screenshot, the file extension must be .jpg, .jpeg, or .tga.
     * 
     * @param {string} directory 
     * @returns {string[]}
     */
    listScreenshots(directory) {
        return this.list(directory).filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.tga');
        });
    }

    /**
     * Moves a file from source to destination.
     * 
     * This is just a facade for fs.renameSync().
     * 
     * @param {string} source 
     * @param {string} destination 
     */
    move(source, destination) {
        this.fs.renameSync(source, destination);
    }

    /**
     * Gets the application's base path.
     * 
     * If the path is provided, it will be appended to the base path.
     * 
     * @param {string} path
     * 
     * @returns {string}
     */
    path(path) {
        return __dirname + '/../' + (path || '');
    }
}

module.exports = Files;