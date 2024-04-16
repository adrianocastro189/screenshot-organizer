/**
 * Represents a World of Warcraft client.
 * 
 * This model is agnostic to the World of Warcraft version and can be used
 * for Classic, Retail, or any other version.
 * 
 * In this version, to be a valid client, the only requirement is to have a
 * Screenshots folder inside its path. If this app needs to support other
 * information other than screenshots, this model will need to be updated
 * providing better ways to determine whether it's valid or not.
 */
class Client {
    /**
     * Creates a new Client instance.
     * 
     * @param {string} path The path to the client folder.
     */
    constructor(path) {
        this.path = this.getFilesInstance().sanitizePath(path);
    }

    /**
     * Support method to get the Files instance.
     * 
     * @TODO: Update this method when app() is implemented and get its Files instance <2024.04.12>
     */
    getFilesInstance() {
        const Files = require('../../src/Support/Files');
        return new Files();
    }

    /**
     * Determines whether the client is valid or not.
     * 
     * A valid client is a client that has a Screenshots folder inside its
     * path.
     * 
     * @returns {boolean} True if the client is valid, false otherwise.
     */
    isValid() {
        return this.path !== '' && this.getFilesInstance().exists(`${this.path}/Screenshots`);
    }
}

module.exports = Client;