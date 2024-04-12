const Screenshot = require('../../src/Models/Screenshot');

// this path is close to a real screenshot path, but it doesn't exist in the test environment
const SAMPLE_SCREENSHOT_PATH = 'C:/Program Files (x86)/World of Warcraft/_classic_/Screenshots/WoWScrnShot_010123_150920.jpg';

// @covers Screenshot
test('Screenshot class is accessible and can be instantiated', () => {
    const screenshot = new Screenshot('test-path');

    expect(screenshot).toBeInstanceOf(Screenshot);
    expect(screenshot.path).toBe('test-path');
});

// @covers Screenshot.getFilename()
test('Screenshot.getFilename() can extract the file name from the path', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_PATH);

    expect(screenshot.getFilename()).toBe('WoWScrnShot_010123_150920.jpg');
});
