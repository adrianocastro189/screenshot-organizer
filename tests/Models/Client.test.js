const Client = require('../../src/Models/Client');

const client = new Client('');

test('Client.construct()', () => {
    expect(client).toBeInstanceOf(Client);
    expect(client.path).toBe('');
});