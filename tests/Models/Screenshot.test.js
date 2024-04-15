const Screenshot = require('../../src/Models/Screenshot');

// these paths are close to real screenshot paths, but they don't exist in the test environment
const SAMPLE_SCREENSHOT_JPG_PATH = 'C:/Program Files (x86)/World of Warcraft/_classic_/Screenshots/WoWScrnShot_030123_150920.jpg';
const SAMPLE_SCREENSHOT_TGA_PATH = 'C:/Program Files (x86)/World of Warcraft/_classic_/Screenshots/WoWScrnShot_030123_150920.tga';

// @covers Screenshot
test('Screenshot class is accessible and can be instantiated', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot).toBeInstanceOf(Screenshot);
    expect(screenshot.path).toBe(SAMPLE_SCREENSHOT_JPG_PATH);
});

// @covers Screenshot.getDate()
test('Screenshot.getDate() can return the date and time the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getDate()).toEqual(new Date('2023-03-01T15:09:20'));
});

// @covers Screenshot.getDay()
test('Screenshot.getDay() can return the day of the month the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getDay()).toBe(1);
});

// @covers Screenshot.getFilename()
test('Screenshot.getFilename() can extract the file name from the path', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getFilename()).toBe('WoWScrnShot_030123_150920.jpg');
});

// @covers Screenshot.getHour()
test('Screenshot.getHour() can return the hour the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getHour()).toBe(15);
});

// @covers Screenshot.getMinute()
test('Screenshot.getMinute() can return the minute the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getMinute()).toBe(9);
});

// @covers Screenshot.getMonth()
test('Screenshot.getMonth() can return the month the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getMonth()).toBe(3);
});

// @covers Screenshot.getSecond()
test('Screenshot.getSecond() can return the second the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getSecond()).toBe(20);
});

// @covers Screenshot.getYear()
test('Screenshot.getYear() can return the year the screenshot was taken', () => {
    const screenshot = new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH);

    expect(screenshot.getYear()).toBe(2023);
});

// @covers Screenshot.parseDate()
test('Screenshot.parseDate() can extract the date and time from the file name', () => {
    expect(new Screenshot(SAMPLE_SCREENSHOT_JPG_PATH).screenshotDate).toEqual(new Date('2023-03-01T15:09:20'));
    expect(new Screenshot(SAMPLE_SCREENSHOT_TGA_PATH).screenshotDate).toEqual(new Date('2023-03-01T15:09:20'));
});
