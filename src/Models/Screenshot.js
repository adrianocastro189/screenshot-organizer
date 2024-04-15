/**
 * Represents a screenshot file.
 * 
 * This model contains all the information needed to work with a screenshot
 * file as well as the methods to manipulate it.
 * 
 * A screenshot is not tied to any World of Warcraft version, so it can be
 * used for Classic, Retail, or any other version.
 */
class Screenshot {
    /**
     * Creates a new Screenshot instance.
     * 
     * @param {string} path The path to the screenshot file.
     */
    constructor(path) {
        this.path = path;

        this.parseDate();
    }

    /**
     * Copies the screenshot to a new location.
     * 
     * The screenshot destination must include the absolute path and the
     * filename.
     * 
     * @param {string} destination The absolute new path filename.
     */
    copy(destination) {
        this.getFilesInstance().copy(this.path, destination);
    }

    /**
     * Gets the date and time the screenshot was taken.
     * 
     * @returns {Date} The date and time the screenshot was taken.
     */
    getDate() {
        return this.screenshotDate;
    }

    /**
     * Gets the day of the month the screenshot was taken.
     * 
     * @returns {number} The day of the month the screenshot was taken.
     */
    getDay() {
        return this.screenshotDate.getDate();
    }

    /**
     * Gets the destination folder of the screenshot.
     * 
     * In this first version, the destination folder is represented by the
     * year and month the screenshot was taken. For example, a screenshot
     * taken on March 1, 2023, will have a destination folder of /2023/03.
     * 
     * @TODO: Update this method in FE2 <2024.04.15>
     * 
     * @returns {string} The destination folder of the screenshot.
     */
    getDestinationFolder() {
        return `${this.getYear()}/${this.getMonth().toString().padStart(2, '0')}`;
    }

    /**
     * Gets the file name of the screenshot, without the path.
     * 
     * @returns {string} The file name of the screenshot.
     */
    getFilename() {
        return this.getFilesInstance().extractFileName(this.path);
    }

    /**
     * Support method to get the Files instance.
     * 
     * @TODO: Update this method when app() is implemented and get its Files instance <2024.04.12>
     */
    getFilesInstance() {
        const Files = require('../../src/Support/Files');
        return new Files();
    }

    /**
     * Gets the hour the screenshot was taken.
     * 
     * @returns {number} The hour the screenshot was taken.
     */
    getHour() {
        return this.screenshotDate.getHours();
    }

    /**
     * Gets the minute the screenshot was taken.
     * 
     * @returns {number} The minute the screenshot was taken.
     */
    getMinute() {
        return this.screenshotDate.getMinutes();
    }

    /**
     * Gets a numeric representation of the month the screenshot was taken.
     * 
     * Months in JavaScript are zero-based, so January is 0, February is 1,
     * etc. However, this method returns the month in the format 1-12.
     * 
     * @returns {number} The month the screenshot was taken.
     */
    getMonth() {
        return this.screenshotDate.getMonth() + 1;
    }

    /**
     * Gets the second the screenshot was taken.
     * 
     * @returns {number} The second the screenshot was taken.
     */
    getSecond() {
        return this.screenshotDate.getSeconds();
    }

    /**
     * Gets the year the screenshot was taken.
     * 
     * @returns {number} The year the screenshot was taken.
     */
    getYear() {
        return this.screenshotDate.getFullYear();
    }

    /**
     * Moves the screenshot to a new location.
     * 
     * The screenshot destination must include the absolute path and the
     * filename.
     * 
     * @param {string} destination The absolute new path filename.
     */
    move(destination) {
        this.getFilesInstance().move(this.path, destination);

        this.path = destination;
    }

    /**
     * Uses what's configured in the app to organize the screenshot.
     * 
     * By organizing the screenshot, it means that it will be moved or
     * copied to a new location.
     */
    organize() {
        // @TODO: Implement this method in FE2 <2024.04.15>
    }

    /**
     * Extracts a date and time from the screenshot file name.
     * 
     * As an example, a screenshot named WoWScrnShot_020324_135147.jpg
     * should return a date and time of 2024-02-03 13:51:47, given that the
     * format in the filename is month, day, year, hour, minute, second.
     * 
     * @returns {string} The extracted date and time in the format "YYYY-MM-DD HH:mm:ss".
     */
    parseDate() {
        const match = /(\d{2})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2}).*/.exec(this.path);

        const y = parseInt(match[3]); // please, change this if you're alive in 2100+
        const m = parseInt(match[1]);
        const d = parseInt(match[2]);
        const h = parseInt(match[4]);
        const i = parseInt(match[5]);
        const s = parseInt(match[6]);

        this.screenshotDate = new Date(2000 + y, m - 1, d, h, i, s);
    }
}

module.exports = Screenshot;