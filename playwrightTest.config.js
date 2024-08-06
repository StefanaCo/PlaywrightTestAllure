require('dotenv').config();
import {devices} from '@playwright/test';

const config ={
  testDir: 'tests',
  // retries: 1, /* retries failed tests */
  // workers: 3, /* run in parallel, by default is 5 */
  /* Maximum time test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  /*Shared settings for all the projects below. See https://playwright.dev/doc */
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'on',
        ...devices['iPone 11']
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        video: 'retrain-on-failure', /* 'on-first-retry' */
        // ignoreHttpsErrors: true,
        // permissions: ['geolocation']
        // viewport: {
        //   width: 720,
        //   height: 720
        // }
      }
    }
  ]
};

module.exports = config;


