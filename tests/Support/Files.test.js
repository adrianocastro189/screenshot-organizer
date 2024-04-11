const Files = require('../../src/Support/Files');

// @covers Files.js
test('Files class is accessible and can be instantiated', () => {
    const files = new Files();
    expect(files).toBeInstanceOf(Files);
});