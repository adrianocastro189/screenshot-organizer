require('../../src/Core/App');

const Configuration = require('../../src/Models/Configuration');
const Files = require('../../src/Support/Files');

test('App.construct() and single instance', () => {
    expect(app()).not.toBeNull();
    expect(app().configuration).toBeInstanceOf(Configuration);
    expect(app().files).toBeInstanceOf(Files);

    app().testProperty = 'test';

    expect(app().testProperty).toBe('test');
});

test('App.load()', () => {
    const configurationMock = {
        load: jest.fn()
    };

    app().configuration = configurationMock;
    app().load();

    expect(app().configuration.load).toHaveBeenCalled();
});