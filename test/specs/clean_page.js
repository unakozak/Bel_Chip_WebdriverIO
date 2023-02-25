const ShopPage = require('../pageobjects/ShopPage');
const LoginPage = require('../pageobjects/LoginPage');
const CleanPage = require('../pageobjects/CleanPage');
const fs = require('fs');


let validCredentials = JSON.parse(fs.readFileSync("test/testdata/validCred.json"));
    
describe('BelChip web application CLEAN_PAGE', async () => {
        
    validCredentials.forEach( ({email, password}) => {
        it('should clean the shopping cart', async () => {
            await browser.url('/');
            await LoginPage.login(email, password);
            await ShopPage.addToCart();
            await ShopPage.checkCart(); 
            await CleanPage.cleanCart();           
        });
    }); 
});
    