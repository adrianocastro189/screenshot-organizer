const Client = require('../../src/Models/Client');
const Files = require('../../src/Support/Files');

const files = new Files();

const validClient = new Client(files.path('tests/Mocks/ClientMock'));
const invalidClient = new Client(files.path('tests/Mocks/InvalidClientMock'));

test('Client.construct()', () => {
    expect(validClient).toBeInstanceOf(Client);
    expect(validClient.path).toBe(files.path('tests/Mocks/ClientMock'));
});

test('Client.isValid()', () => {
    expect(validClient.isValid()).toBe(true);
    expect(invalidClient.isValid()).toBe(false);
});

