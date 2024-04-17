const Client = require('./Client');

/**
 * Wraps the configuration that the application uses to run.
 */
class Configuration {
    /**
     * Creates a new Configuration instance.
     */
    constructor() {
        this.clients = [];
    }

    /**
     * Asserts that the configuration file exists.
     * 
     * If the configuration file doesn't exist, an error is thrown.
     */
    assertConfigurationFileExists() {
        const configurationPath = this.getConfigurationPath();

        if (!this.getFilesInstance().exists(configurationPath)) {
            throw new Error('No config.json found!');
        }
    }

    /**
     * Gets the absolute path to the configuration file.
     * 
     * @returns {string} The path to the configuration file.
     */
    getConfigurationPath() {
        return this.getFilesInstance().path('config.json');
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
     * Loads a client represented by a path.
     * 
     * The client path should be a valid path to a client folder, otherwise
     * an error will be thrown.
     * 
     * @param {string} clientPath 
     */
    loadClient(clientPath) {
        const client = new Client(clientPath);

        client.assertClientIsValid();

        this.clients.push(client);
    }

    /**
     * Loads the config.json file and sets the configuration properties.
     * 
     * The config.json file should be in the root of the project and can be
     * copied from the config-example.json file.
     */
    loadConfiguration() {
        this.assertConfigurationFileExists();

        const configurationPath = this.getConfigurationPath();

        this.properties = require(configurationPath);

        return this;
    }
}

module.exports = Configuration;