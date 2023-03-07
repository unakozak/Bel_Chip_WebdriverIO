const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');
const expectChai = require('chai').expect;

describe('BelChip web application CLEAN_PAGE', async () => {
        
    it('should clean the shopping cart', async () => {
        await LoginPage.login(validEmail, validPassword);
        await ShopPage.addToCart();
        await ShopPage.checkCart(); 
        await ShopPage.cleanCart();    
        expectChai(await ShopPage.isItemDisplayedInCart()).to.equal(false);
    });
});
    