const Client = require('../../src/Models/Client');
const Files = require('../../src/Support/Files');
const Screenshot = require('../../src/Models/Screenshot');

const files = new Files();

const validClient = new Client(files.path('tests/Mocks/ClientMock'));
const invalidClient = new Client(files.path('tests/Mocks/InvalidClientMock'));

test('Client.construct()', () => {
    expect(validClient).toBeInstanceOf(Client);
    expect(validClient.path).toBe(files.path('tests/Mocks/ClientMock'));
});

test('Client.getScreenshots()', () => {
    const screenshots = validClient.getScreenshots();
    expect(screenshots).toHaveLength(3);
    // checks if screenshots is an array of Screenshot instances
    screenshots.forEach(screenshot => expect(screenshot).toBeInstanceOf(Screenshot));
    expect(screenshots[0].path).toBe(files.path('tests/Mocks/ClientMock/Screenshots/WoWScrnShot_010124_220255.jpg'));
    expect(screenshots[1].path).toBe(files.path('tests/Mocks/ClientMock/Screenshots/WoWScrnShot_010624_113235.jpg'));
    expect(screenshots[2].path).toBe(files.path('tests/Mocks/ClientMock/Screenshots/WoWScrnShot_010924_153001.jpg'));
});

test('Client.isValid()', () => {
    expect(validClient.isValid()).toBe(true);
    expect(invalidClient.isValid()).toBe(false);
});

test('Client.organize()', () => {
    const screenshotA = new Screenshot('WoWScrnShot_030123_150920.jpg');
    const screenshotB = new Screenshot('WoWScrnShot_030123_150920.jpg');
    const screenshotC = new Screenshot('WoWScrnShot_030123_150920.jpg');

    screenshotA.organize = jest.fn();
    screenshotB.organize = jest.fn();
    screenshotC.organize = jest.fn();
    
    const client = new Client('');
    client.getScreenshots = jest.fn().mockReturnValue([screenshotA, screenshotB]);

    client.organize();

    expect(screenshotA.organize).toHaveBeenCalledTimes(1);
    expect(screenshotB.organize).toHaveBeenCalledTimes(1);
    expect(screenshotC.organize).toHaveBeenCalledTimes(0);
});