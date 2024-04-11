const Files = require('../../src/Support/Files');

// @covers Files.js
test('Files class is accessible and can be instantiated', () => {
    const files = new Files();
    expect(files).toBeInstanceOf(Files);
});

// @covers Files.copy()
test('Files.copy() can copy a file from source to destination', () => {
    const files = new Files();
    const source = 'tests/Support/Files.test.js';
    const destination = 'tests/Support/Files.test.copy.js';
    files.copy(source, destination);
    expect(files.fs.existsSync(destination)).toBe(true);
    files.fs.unlinkSync(destination);
});