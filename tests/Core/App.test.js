require('../../src/Core/App');

test('App.construct() and single instance', () => {
    expect(app()).not.toBeNull();

    app().testProperty = 'test';

    expect(app().testProperty).toBe('test');
});
