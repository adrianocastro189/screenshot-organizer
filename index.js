const App = require('./src/Core/App');

try {
    // tries to load the App instance
    app().load();

    // starts the app
    app().organize();
} catch (error) {
    // outputs the error message
    // to debug the problem, log the full error object, not only the message
    // console.error(error);
    console.error(error.message);
}