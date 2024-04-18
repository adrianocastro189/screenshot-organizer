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

    load() {
        // load the app configuration
        this.configuration.load();
    }
}

global.app = () => {
    // instantiates the app instance if it doesn't exist
    global.appInstance = global.appInstance || new App();

    // returns the single app instance
    return global.appInstance;
};