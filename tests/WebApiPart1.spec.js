import {expect, request, test} from "@playwright/test";
import {ApiUtils} from "../utils/ApiUtils";

let response;
const loginData = {"userEmail": "stefanacatruc@yahoo.com", "userPassword": "OnlyForTesting234"};
const orderData = {"orders":[{"country":"Belgium","productOrderedId":"6581ca399fd99c85e8ee7f45"}]};

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginData);
    response = await apiUtils.createOrder(orderData);
})

test('Put an order and verify', async ({page}) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto(process.env.BASE_URL);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");


    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    // await page.pause();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});