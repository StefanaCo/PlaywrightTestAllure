const {devices} = require("@playwright/test");
require('dotenv').config();

const config = {
    testDir: 'tests',
    /* Maximum time test can run for. */
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    reporter: 'allure-playwright',
    /*Shared settings for all the projects below. See https://playwright.dev/doc */
    use: {
        browserName: 'chromium',
        use: {...devices['Desktop Chrome']},
        headless: true,
        screenshot: 'on',
        video: 'on',
        trace: 'on',
    }
};

module.exports = config;
