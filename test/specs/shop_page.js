const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');

describe('BelChip web application SHOP_PAGE', async () => {
    
        it('should add the product into the cart from "Home" page', async () => {
            await LoginPage.login(validEmail, validPassword);
            await ShopPage.addToCart();
            expect(await ShopPage.counter).toBeDisplayed();
            await browser.reloadSession();
        });


        it('added products is displayed in the cart', async () => {
            await LoginPage.login(validEmail, validPassword);
            await ShopPage.addToCart();
            await ShopPage.checkCart();  
            expect(await browser.getTitle()).toHaveTextContaining("cart");
            expect(await ShopPage.hrefinCart.getAttribute("href")).toHaveTextContaining("product");
        });

});
    