import {Page, Locator} from '@playwright/test'
export class LoginPage {
    page: Page;
    signInButton: Locator;
    userName: Locator;
    userPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.userPassword = page.locator("#userPassword");
    }

    async goToPage(url:string){
        await this.page.goto(url);
    }
    async validLogin(userName:string, password:string) {
        await this.userName.fill(userName);
        await this.userPassword.fill(password);
        await this.signInButton.click();
    }
}
module.exports = {LoginPage};