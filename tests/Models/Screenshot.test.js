const Files = require('../../src/Support/Files');
const Screenshot = require('../../src/Models/Screenshot');

// these paths are close to real screenshot paths, but they don't exist in the test environment
const SAMPLE_SCREENSHOT_JPG_PATH = 'C:/Program Files (x86)/World of Warcraft/_classic_/Screenshots/WoWScrnShot_030123_150920.jpg';
const SAMPLE_SCREENSHOT_TGA_PATH = 'C:/Program Files (x86)/World of Warcraft/_classic_/Screenshots/WoWScrnShot_030123_150920.tga';

const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

test('Screenshot.construct()', () => {
    expect(screenshot).toBeInstanceOf(Screenshot);
    expect(screenshot.path).toBe(SAMPLE_SCREENSHOT_JPG_PATH);
});

test('Screenshot.copy()', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    // mocks the Files instance
    const files = new Files();
    files.copy = jest.fn();
    screenshot.getFilesInstance = () => files;

    screenshot.copy('test-destination');

    expect(files.copy).toHaveBeenCalledTimes(1);
    expect(files.copy).toHaveBeenCalledWith(SAMPLE_SCREENSHOT_JPG_PATH, 'test-destination');
});

test('Screenshot.getDate()', () => expect(screenshot.getDate()).toEqual(new Date('2023-03-01T15:09:20')));

test('Screenshot.getDay()', () => expect(screenshot.getDay()).toBe(1));

test('Screenshot.getDestinationFolder()', () => expect(screenshot.getDestinationFolder()).toBe('2023/03'));

test('Screenshot.getFilename()', () => expect(screenshot.getFilename()).toBe('WoWScrnShot_030123_150920.jpg'));

test('Screenshot.getFilesInstance()', () => expect(screenshot.getFilesInstance()).toBeInstanceOf(Files));

test('Screenshot.getHour()', () => expect(screenshot.getHour()).toBe(15));

test('Screenshot.getMinute()', () => expect(screenshot.getMinute()).toBe(9));

test('Screenshot.getMonth()', () => expect(screenshot.getMonth()).toBe(3));

test('Screenshot.getSecond()', () => expect(screenshot.getSecond()).toBe(20));

test('Screenshot.getYear()', () => expect(screenshot.getYear()).toBe(2023));

test('Screenshot.move()', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    // mocks the Files instance
    const files = new Files();
    files.move = jest.fn();
    screenshot.getFilesInstance = () => files;

    expect(screenshot.path).toBe(SAMPLE_SCREENSHOT_JPG_PATH);

    screenshot.move('test-destination');

    expect(files.move).toHaveBeenCalledTimes(1);
    expect(files.move).toHaveBeenCalledWith(SAMPLE_SCREENSHOT_JPG_PATH, 'test-destination');
    expect(screenshot.path).toBe('test-destination');
});

test('Screenshot.organize()', () => {
    // @TODO: Implement this method in FE2 <2024.04.15>
});

test('Screenshot.parseDate()', () => {
    expect(new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH).screenshotDate).toEqual(new Date('2023-03-01T15:09:20'));
    expect(new Screenshot(SAMPLE_SCREENSHOT_TGA_PATH).screenshotDate).toEqual(new Date('2023-03-01T15:09:20'));
});
