import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {OrdersHistoryPage} from './OrderHistoryPage';
import {OrdersReviewPage} from './OrderReviewPage';
import { CartPage } from './CartPage';
import {Page} from '@playwright/test';

export class POManager
{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    ordersHistoryPage : OrdersHistoryPage;
    ordersReviewPage : OrdersReviewPage;
    cartPage : CartPage;
    page : Page;


    constructor(page:Page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);


    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getOrderHistoryPage()
    {
        return this.ordersHistoryPage;
    }

    getOrderReviewPage()
    {
        return this.ordersReviewPage;
    }
}
module.exports = {POManager};