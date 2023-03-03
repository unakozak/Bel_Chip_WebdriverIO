const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');

describe('BelChip web application CLEAN_PAGE', async () => {
        
    it('should clean the shopping cart', async () => {
        await LoginPage.login(validEmail, validPassword);
        await ShopPage.addToCart();
        await ShopPage.checkCart(); 
        await ShopPage.cleanCart();    
        await expect(await ShopPage.hrefinCart).not.toExist();       
    });
});
    