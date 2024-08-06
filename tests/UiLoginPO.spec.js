// const {test} = require('@playwright/test');
// const {PageObjectManager} = require("../pageObject/PageObjectManager");
// const {LoginPage} = require("../pageObject/LoginPage");
// const {DashboardPage} = require("../pageObject/DashboardPage");
// // const {CheckOutPage} = require("../pageObject/CheckOutPage");
// const {MyOrdersDetails} = require("../pageObject/MyOrdersDetails");
//
// test('@Client App login and make an order', async ({page}) => {
//     const productName = 'ZARA COAT 3';
//     // npx playwright test --grep @Web - will run only test with @Web tag
//     // const pageObjectManager = new PageObjectManager(page);
//     // Login
//     const loginPage = new LoginPage(page);
//     await loginPage.goToPage();
//     await loginPage.validLogin(process.env.EMAIL, process.env.PASSWORD);
//     // Search product and add to cert
//     const dashBoardPage = new DashboardPage(page);
//     await dashBoardPage.searchProductAndAddToCart(productName);
//     await dashBoardPage.navigateToCartAndVerifyIfProduct(productName);
//     // check out page
//     const checkOut = new CheckOutPage(page);
//     await checkOut.checkOutPage();
//     // view product details and my orders details
//     const productAndOrderDetails = new MyOrdersDetails(page);
//     await productAndOrderDetails.viewProductDetails(process.env.EMAIL);
//     await productAndOrderDetails.orderProductDetails();
// });
// // for Allure report
// //npx playwright test --reporter=line,allure-playwright
// //allure generate ./allure-results --clean
// //allure open ./allure-report