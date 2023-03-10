const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');
const expectChai = require('chai').expect;


describe('BelChip web application SHOP_PAGE', async () => {
    
    it('should add the product into the cart from "Home" page', async () => {
        await LoginPage.login(validEmail, validPassword);
        await ShopPage.addToCart();
        await ShopPage.counter.waitForDisplayed();
        expectChai(await ShopPage.isCounterDisplayed()).to.equal(true);
    });

    it('added products is displayed in the cart', async () => {
        await LoginPage.login(validEmail, validPassword);
        await ShopPage.addToCart();
        await ShopPage.checkCart();  
        expectChai(await ShopPage.isItemDisplayedInCart()).to.equal(true);
        
    });

});
    