require('dotenv').config();

const config = {
    testDir: 'tests',
    /* Maximum time test can run for. */
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    reporter: 'html',
    /*Shared settings for all the projects below. See https://playwright.dev/doc */
    use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
    }
};

module.exports = config;
