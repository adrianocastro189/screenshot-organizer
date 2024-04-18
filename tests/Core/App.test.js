const App = require('../../src/Core/App');

const app = new App();

test('App.construct()', () => {
    expect(app).toBeInstanceOf(App);
});
