// import {test} from '@playwright/test';
// import {LoginPage} from "../pageObject_ts/LoginPage";
// import {DashboardPage} from "../pageObject_ts/DashboardPage";
// // import {CheckOutPage} from "../pageObject_ts/CheckOutPage";
// // import {OrderHistoryPage} from "../pageObject_ts/OrderHistoryPage";
//
// test('Client App login and make an order', async ({page}) => {
//     const productName = 'ZARA COAT 3';
//     // npx playwright test --grep @Web - will run only test with @Web tag
//     // const pageObjectManager = new PageObjectManager(page);
//     // Login
//     const loginPage = new LoginPage(page);
//     await loginPage.goToPage();
//     await loginPage.validLogin(process.env.EMAIL, process.env.PASSWORD);
//     // Search product and add to cert
//     const dashBoardPage = new DashboardPage(page);
//     await dashBoardPage.searchProductAddCart(productName);
//     await dashBoardPage.navigateToCart();
//     // check out page
//     const checkOut = new CheckOutPage(page);
//     await checkOut.checkOutPage(productName);
//     // view product details and my orders details
//     const productAndOrderDetails = new OrderHistoryPage(page);
//     await productAndOrderDetails.viewProductDetails(process.env.EMAIL);
//     await productAndOrderDetails.orderProductDetails();
// });
// // for Allure report
// //npx playwright test --reporter=line,allure-playwright
// //allure generate ./allure-results --clean
// //allure open ./allure-report