const Screenshot = require('../../src/Models/Screenshot');

// @covers Screenshot
test('Screenshot class is accessible and can be instantiated', () => {
    const screenshot = new Screenshot();
    expect(screenshot).toBeInstanceOf(Screenshot);
});
