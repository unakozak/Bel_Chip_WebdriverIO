const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/LoginPage');
    
describe('BelChip web application HOME_PAGE', async () => {

    it('should change the display of the cost of goods from BYN to RUR', async () => {
        await LoginPage.login(validEmail, validPassword);
        await HomePage.changeCurrency("RUR");
        expect(await HomePage.newPrice.getValue()).toHaveTextContaining(currency);
    });

    it('should add products to favorites', async () => {
        await HomePage.addToFav();
        expect(HomePage.counter).toExist();
    });

});
    





