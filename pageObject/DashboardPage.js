class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
    }

    async searchProductAndAddToCart(productName) {
        await this.products.first().waitFor();
        const titles = await this.productsText.allTextContents();
        console.log('This is the page title: ', titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }


    async navigateToOrders()
    {
        await this.orders.click();
    }


    async navigateToCart()
    {
        await this.cartButton.click();
    }
}

module.exports = {DashboardPage};