const {Given, When, Then} = require('@cucumber/cucumber');
const {POManager} = require("../../pageObject/PageObjectManager");
const {expect} = require("@playwright/test");

let poManager;

Given('login to Ecommerce application', {timeout: 500*1000}, async function () {
    poManager = new POManager(this.page);
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.goToPage('https://rahulshettyacademy.com/client');
    await this.loginPage.validLogin('stefanacatruc@yahoo.com', 'OnlyForTesting234');
});

When('add {string} to cart', async function (productName) {
    this.dashboardPage = poManager.getDashboardPage();
    await this.dashboardPage.searchProductAndAddToCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('verify {string} is displayed in the cart', async function (productName) {
    this.cartPage = poManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
});

When('enter valid details and place the order', async function () {
    await this.cartPage.Checkout();

    this.ordersReviewPage = poManager.getOrdersReviewPage();
    await this.ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await this.ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('verify order is present in the order history', async function () {
    await this.dashboardPage.navigateToOrders();
    this.ordersHistoryPage = poManager.getOrdersHistoryPage();
    await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await this.ordersHistoryPage.getOrderId())).toBeTruthy();
});

//npx cucumber-js features/ErrorValidation.feature --exit
//npx cucumber-js --parallel 2 --exit --format html:cucumber-report.html
//npx cucumber-js features/greeting.feature --parallel 2 --exit --format html:cucumber-report.html