const Configuration = require('../../src/Models/Configuration');

const configuration = new Configuration();

test('Client.construct()', () => {
    expect(configuration).toBeInstanceOf(Configuration);
});
