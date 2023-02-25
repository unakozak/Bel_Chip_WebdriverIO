const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');
const fs = require('fs');


let validCredentials = JSON.parse(fs.readFileSync("test/testdata/validCred.json"));
    
describe('BelChip web application SHOP_PAGE', async () => {
    
        it('should add the product into the cart from "Home" page', async () => {
            await browser.url('/');
            await ShopPage.addToCart();
            await expect(await ShopPage.counter).toBeDisplayed();
        });

    validCredentials.forEach( ({email, password}) => {
        it('added products is displayed in the cart', async () => {
            await browser.url('/');
            await LoginPage.login(email, password);
            await ShopPage.addToCart();
            await ShopPage.checkCart();  
        
        });
    }); 
});
    