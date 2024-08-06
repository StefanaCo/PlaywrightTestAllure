import {expect, test} from '@playwright/test'

test('Security test request intercept', async ({page}) => {
    //login and reach orders page
    await page.goto(process.env.BASE_URL);
    await page.locator("#userEmail").fill(process.env.EMAIL);
    await page.locator("#userPassword").fill(process.env.PASSWORD);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        async route => route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=667e686fae2afd4c15236984'}));
    await page.locator('.btn-primary').first().click();
    await expect(page.locator('p').last()).toHaveText('You are not authorize to view this order');
});