const {devices} = require("@playwright/test");
require('dotenv').config();

const config = {
    testDir: 'tests',
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
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
