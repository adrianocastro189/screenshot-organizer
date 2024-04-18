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
     * Gets a list of initialized clients.
     * 
     * This method expects the class to be fully loaded, otherwise it will
     * return an empty array.
     * 
     * @returns {Array<Client>}
     */
    getClients() {
        return this.clients;
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
     * Gets the destination folder set in the configuration file.
     * 
     * This method expects the class to be fully loaded, otherwise it will
     * return null.
     * 
     * @returns {string} The destination folder.
     */
    getDestinationFolder() {
        return this.destinationFolder;
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
     * Gets the sync method set in the configuration file.
     * 
     * By default, the sync method is set to 'copy'.
     * 
     * @returns {string}
     */
    getSyncMethod() {
        return this.properties?.syncMethod || 'copy';
    }

    /**
     * Loads all the configuration properties required to run the application.
     */
    load() {
        this.loadConfiguration();
        this.loadClients();
        this.loadDestinationFolder();
    }

    /**
     * Loads a client represented by a path.
     * 
     * The client path should be a valid path to a client folder, otherwise
     * an error will be thrown.
     * 
     * @param {string} clientPath 
     * 
     * @returns {Configuration} The current instance.
     */
    loadClient(clientPath) {
        const client = new Client(clientPath);

        client.assertClientIsValid();

        this.clients.push(client);
        
        return this;
    }

    /**
     * Loads all the clients set in the configuration file.
     * 
     * @returns {Configuration} The current instance.
     */
    loadClients() {
        if (! this.properties.clients || this.properties.clients.length === 0) {
            throw new Error('No clients found in the configuration file.');
        }

        this.properties.clients.forEach(client => this.loadClient(client.path));

        return this;
    }

    /**
     * Loads the destination folder set in the configuration file.
     * 
     * By loading the destination folder, the application will create the
     * folder if it doesn't exist and then store it 
     */
    loadDestinationFolder() {
        this.destinationFolder = this.properties.settings.destinationFolder;

        this.getFilesInstance().maybeCreateDirectory(this.destinationFolder);
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