const Configuration = require('../Models/Configuration');
const Files = require('../Support/Files');

/**
 * This the class that orchestrates the application.
 * 
 * Its responsible to instantiate all its parts, coordinate them, generate
 * the outputs, and so on. At the same time, it has no funcionalities by
 * itself as a container.
 */
class App {
    /**
     * Creates the app instance.
     */
    constructor() {
        this.configuration = new Configuration();

        // stores the files singleton instance
        this.files = new Files();
    }

    /**
     * Loads the app dependencies.
     */
    load() {
        // load the app configuration
        this.configuration.load();
    }

    /**
     * Calls the organize method of all clients.
     */
    organize() {
        this.configuration.clients.forEach(client => {
            client.organize();
        });
    }

    /**
     * Just a facade to the console.log method.
     * 
     * @param {*} value 
     */
    out(value) {
        console.log(value);
    }
}

global.app = () => {
    // instantiates the app instance if it doesn't exist
    global.appInstance = global.appInstance || new App();

    // returns the single app instance
    return global.appInstance;
};