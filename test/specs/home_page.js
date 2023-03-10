const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/LoginPage');
const expectChai = require('chai').expect;

describe('BelChip web application HOME_PAGE', async () => {

    it('should change the display of the cost of goods from BYN to RUR', async () => {
        await LoginPage.login(validEmail, validPassword);
        await HomePage.changeCurrency("RUR");
        expect(await HomePage.newPrice.getValue()).toHaveTextContaining(currency);
    });

    it('should add products to favorites', async () => {
        await browser.url('/');
        await HomePage.addToFav();
        expectChai(await HomePage.isCounterDisplayed()).to.equal(true);
    });

});
    





