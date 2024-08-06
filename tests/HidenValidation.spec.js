// import {test, expect} from "@playwright/test";
//
// test("Validation of hidden text and popup", async ({page}) => {
//     await page.goto(process.env.AUTOMATION_URL);
//     // await page.goto('https://google.com');
//     // await page.goBack();
//     // await page.goForward();
//     await expect(page.locator("#displayed-text")).toBeVisible();
//     await page.locator("#hide-textbox").click();
//     await expect(page.locator("#displayed-text")).toBeHidden();
//     await page.locator("#confirmbtn").click();
//     page.on('dialog', dialog => dialog.accept());
//     await page.locator("#mousehover").hover();
//     const framesPage = page.frameLocator("#courses-iframe");
//     await framesPage.locator('li a[href*="lifetime-access"]:visible').click();
//     const textCheck = await framesPage.locator('.text h2').textContent();
//     console.log('This is the text: ', textCheck.split(' ')[1]);
// });
//
// test('Screenshot & Visual comparison', async({page}) => {
//     await page.goto(process.env.AUTOMATION_URL);
//     await expect(page.locator("#displayed-text")).toBeVisible();
//     // await page.locator("#displayed-text").screenshot({path: 'partialScreenshot.png'})
//     await page.locator("#hide-textbox").click();
//     // await page.screenshot({path: 'screenshot.png'})
//     await expect(page.locator("#displayed-text")).toBeHidden();
//     expect(await page.screenshot()).toMatchSnapshot('landing.png');
// });