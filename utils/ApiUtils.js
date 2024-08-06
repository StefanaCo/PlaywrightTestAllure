class ApiUtils {
    constructor(apiContext, loginData) {
        this.apiContext = apiContext;
        this.loginData = loginData;
    }

    async getToken() {
        // const loginResponse = await this.apiContext.post(process.env.LOGIN_URL, {
        //     data: this.loginData
        // });
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
            data: this.loginData
        });
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log('This is token:  ', token);
        return token;
    }

    async createOrder(orderData){
        let response = {};
        response.token = await this.getToken();
        // const orderResponse = await this.apiContext.post(process.env.ORDER_URL, {
        //     data: orderData,
        //     headers: {
        //         'Authorization' : response.token,
        //         'Content-Type' : 'application/json'
        //     }
        // })
        const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
            data: orderData,
            headers: {
                'Authorization' : response.token,
                'Content-Type' : 'application/json'
            }
        })
        const orderResponseJson = await orderResponse.json();
        console.log('This are order data: ', orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }
}
module.exports = {ApiUtils};