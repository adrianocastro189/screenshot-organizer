const Files = require('../../src/Support/Files');

// @covers Files
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

// @covers Files.delete()
test('Files.delete() can delete a file', () => {
    const files = new Files();
    const file = 'tests/Support/Files.test.copy.js';
    files.fs.writeFileSync(file, 'Test file content.');
    // assert that the file exists
    expect(files.fs.existsSync(file)).toBe(true);
    files.delete(file);
    expect(files.fs.existsSync(file)).toBe(false);
});

// @covers Files.exists()
test('Files.exists() can determine whether a file or folder exists or not', () => {
    const files = new Files();
    expect(files.exists('tests/Support')).toBe(true);
    expect(files.exists('tests/Support/Files.test.js')).toBe(true);
    expect(files.exists('tests/Support/Files.test.invalid.js')).toBe(false);
});

// @covers Files.extractFileName()
test('Files.extractFileName() can extract the file name from a full path', () => {
    const files = new Files();

    expect(files.extractFileName('tests\\Support\\Files.test.js')).toBe('Files.test.js');
    expect(files.extractFileName('tests/Support/Files.test.js')).toBe('Files.test.js');
});

// @covers Files.list()
test('Files.list() can list the contents of a directory', () => {
    const files = new Files();
    const directory = 'tests/Support';
    const contents = files.list(directory);
    expect(contents).toContain('Files.test.js');
});

// @covers Files.listScreenshots()
test('Files.listScreenshots() can list the screenshots in a directory', () => {
    const files = new Files();
    
    const extensions = ['.jpg', '.jpeg', '.tga'];
    extensions.forEach(extension => {
        const screenshotFile = `tests/Support/test-screenshot${extension}`;
        files.fs.writeFileSync(screenshotFile, '');
    });

    const directory = 'tests/Support';
    const screenshots = files.listScreenshots(directory);

    expect(screenshots).not.toContain('Files.test.js');
    expect(screenshots).toContain('test-screenshot.jpg');
    expect(screenshots).toContain('test-screenshot.jpeg');
    expect(screenshots).toContain('test-screenshot.tga');

    // delete the screenshot files
    screenshots.forEach(screenshot => {
        files.fs.unlinkSync(`tests/Support/${screenshot}`);
    });
});

// @covers Files.move()
test('Files.move() can move a file from source to destination', () => {
    const files = new Files();
    const source = 'tests/Support/Files.test.js';
    const clone = 'tests/Support/Files.test.copy.js';
    files.copy(source, clone);
    const destination = 'tests/Support/Files.test.move.js';
    files.copy(clone, destination);
    expect(files.fs.existsSync(destination)).toBe(true);
    files.move(destination, clone);
    expect(files.fs.existsSync(destination)).toBe(false);
    expect(files.fs.existsSync(clone)).toBe(true);
    files.fs.unlinkSync(clone);
});

// @covers Files.sanitizePath()
test('Files.sanitizePath() can sanitize a path', () => {
    const files = new Files();
    const path = 'C:\\Users\\User\\Desktop\\Screenshots\\';
    expect(files.sanitizePath(path)).toBe('C:/Users/User/Desktop/Screenshots');
});