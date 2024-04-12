/**
 * Represents a screenshot file.
 * 
 * This model contains all the information needed to work with a screenshot
 * file as well as the methods to manipulate it.
 * 
 * A screenshot is not tied to any World of Warcraft version, so it can be
 * used for Classic, Retail, or any other version.
 */
class Screenshot {
    /**
     * Creates a new Screenshot instance.
     * 
     * @param {string} path The path to the screenshot file.
     */
    constructor(path) {
        this.path = path;
    }

    /**
     * Gets the file name of the screenshot, without the path.
     * 
     * @returns {string} The file name of the screenshot.
     */
    getFilename() {
        // @TODO: Remove this line when app() is implemented and get its Files instance <2024.04.12>
        const Files = require('../../src/Support/Files'); const files = new Files();

        return files.extractFileName(this.path);
    }
}

module.exports = Screenshot;