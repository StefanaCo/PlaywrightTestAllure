import {request, test} from "@playwright/test";
import {ApiUtils} from "../utils/ApiUtils";

let response;
const loginData = {"userEmail": "stefanacatruc@yahoo.com", "userPassword": "OnlyForTesting234"};
const orderData = {"orders": [{"country": "Belgium", "productOrderedId": "6581ca399fd99c85e8ee7f45"}]};
const fakeOrderData = {data: [], message: "No Orders"}

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
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*', async route => {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakeOrderData);
        await route.fulfill({
            response,
            body
        });
        //intercept the response - API response -> {playwright fake response} -> browser -> render data on front
    })
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log('The message is: ', await page.locator(".mt-4").textContent());
});