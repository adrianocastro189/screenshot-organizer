const fs = require('fs');

// @covers config-example.json
test('should load config-example.json and validate properties', () => {
    const configFile = fs.readFileSync('config-example.json', 'utf-8');
    const config = JSON.parse(configFile);

    expect(config).toHaveProperty('clients');
    expect(Array.isArray(config.clients)).toBe(true);
    expect(config.clients[0]).toHaveProperty('path');
    expect(config.clients[1]).toHaveProperty('path');
    expect(config.settings).toHaveProperty('destinationFolder');
    expect(config.settings).toHaveProperty('syncMethod');
});
