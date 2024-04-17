const Configuration = require('../../src/Models/Configuration');
const Files = require('../../src/Support/Files');

const configuration = new Configuration();

test('Client.construct()', () => {
    expect(configuration).toBeInstanceOf(Configuration);
    expect(configuration.clients).toBeInstanceOf(Array);
});

test("Client.assertConfigurationFileExists() when config.json doesn't exist", () => {
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

test("Client.assertConfigurationFileExists() when config.json exists", () => {
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

test('Client.getConfigurationPath()', () => {
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

test('Client.loadConfiguration()', () => {
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