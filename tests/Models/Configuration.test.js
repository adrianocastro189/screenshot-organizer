const Client = require('../../src/Models/Client');
const Configuration = require('../../src/Models/Configuration');
const Files = require('../../src/Support/Files');

const configuration = new Configuration();

test("Configuration.assertConfigurationFileExists() when config.json doesn't exist", () => {
    const configuration = new Configuration();

    // mocks the Files method to return false
    configuration.getFilesInstance = () => {
        return {
            exists: () => {
                return false;
            },
            path: (file) => {
                return `/${file}`;
            },
        };
    };

    expect(() => {
        configuration.assertConfigurationFileExists();
    }).toThrow('No config.json found!');
});

test("Configuration.assertConfigurationFileExists() when config.json exists", () => {
    const configuration = new Configuration();

    // mocks the Files method to return false
    configuration.getFilesInstance = () => {
        return {
            exists: () => {
                return true;
            },
            path: (file) => {
                return `/${file}`;
            },
        };
    };

    expect(() => {
        configuration.assertConfigurationFileExists();
    }).not.toThrow();
});

test('Configuration.construct()', () => {
    expect(configuration).toBeInstanceOf(Configuration);
    expect(configuration.clients).toBeInstanceOf(Array);
});

test('Configuration.getConfigurationPath()', () => {
    const configuration = new Configuration();

    // mocks the Files method to return a fake app path
    configuration.getFilesInstance = () => {
        return {
            path: (file) => {
                return `/${file}`;
            }
        };
    };

    expect(configuration.getConfigurationPath()).toBe('/config.json');
});

test('Configuration.loadClient() with a valid client', () => {
    const configuration = new Configuration();

    configuration.loadClient(new Files().path('tests/Mocks/ClientMock'));

    expect(configuration.clients).toHaveLength(1);
    expect(configuration.clients[0]).toBeInstanceOf(Client);
});

test('Configuration.loadClient() with an invalid client', () => {
    const configuration = new Configuration();

    expect(() => {
        configuration.loadClient('invalid-path');
    }).toThrow(`Client invalid-path has no screenshots folder.`);
});

test('Configuration.loadConfiguration()', () => {
    const configuration = new Configuration();

    configuration.getConfigurationPath = () => {
        return (new Files()).path('tests/Mocks/config.json');
    }

    configuration.loadConfiguration();

    expect(configuration.properties).toEqual({
        "clients": [
            {
                "path": "C:/Program Files (x86)/World of Warcraft/_classic_"
            },
            {
                "path": "C:/Program Files (x86)/World of Warcraft/_retail_"
            }
        ],
        "settings": {
            "destinationFolder": "C:/Pictures/World of Warcraft Screenshots",
            "syncMethod": "copy"
        }
    });
});