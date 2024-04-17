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
     * Determines whether a file or folder exists or not.
     * 
     * @param {string} path 
     * @returns {boolean}
     */
    exists(path) {
        return this.fs.existsSync(path);
    }

    /**
     * Extracts the file name from a full path.
     * 
     * @param {string} fullPath 
     * @returns {string}
     */
    extractFileName(fullPath) {
        const pathSeparator = /[\\/]/;
        const pathParts = fullPath.split(pathSeparator);
        return pathParts[pathParts.length - 1];
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
        }).map(file => directory + '/' + file);
    }

    /**
     * Recursively creates a directory if it doesn't exist.
     * 
     * It will create all the directories in the path if they don't exist.
     * 
     * @param {string} directory 
     */
    maybeCreateDirectory(directory) {
        if (!this.exists(directory)) {
            this.fs.mkdirSync(directory, { recursive: true });
        }
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
        return this.sanitizePath(__dirname + '/../../' + (path || ''));
    }

    /**
     * Sanitizes a path to make sure it's in the correct format that this
     * application expects.
     * 
     * @param {string} path 
     * @returns string
     */
    sanitizePath(path) {
        // replace all backslashes with forward slashes
        path = path.replace(/\\/g, '/');

        // remove trailing slashes
        path = path.replace(/\/$/, '');

        return path;
    }
}

module.exports = Files;