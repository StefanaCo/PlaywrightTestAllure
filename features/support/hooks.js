const {Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');

Before(async function () {
    const browser = await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
});

// BeforeStep(async function(){
//     // this function will run before every step
// });

// AfterStep(async function({result}){
//     if(result.status === Status.FAILED){
//         await this.page.screenshot();
//     }
// });

After(async function () {
    console.log('This is the end!!!')
});