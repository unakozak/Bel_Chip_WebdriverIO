const LoginPage = require('../pageobjects/LoginPage');
const SearchPage = require('../pageobjects/SearchPage');
const fs = require('fs');



let validCredentials = JSON.parse(fs.readFileSync("test/testdata/validCred.json"));
let invalidCredentials = JSON.parse(fs.readFileSync("test/testdata/invalidCred.json"));
let searchField = JSON.parse(fs.readFileSync("test/testdata/searchField.json"));

    
    describe('BelChip web application LOGIN_PAGE', async () => {
    
        invalidCredentials.forEach( ({email, password}) => {
            it('should login with invalid credentials', async () => {
                await browser.url('/');
                await LoginPage.login(email, password);
                await (LoginPage.alertDanger).waitForDisplayed();
                await expect(await LoginPage.alertDanger).toBeDisplayed();
                await (LoginPage.closePopup).click();
            });
        });
    
        validCredentials.forEach( ({email, password}) => {
            it('should login with valid credentials', async () => {
                await browser.url('/');
                await LoginPage.login(email, password);
                await browser.pause(1000);
            });
        });


        searchField.forEach(({input}) => {
            it('should search products and appear them on the screen', async () => {
                await browser.url('/');
                await SearchPage.search(input);
                await browser.pause(1000);
            });
        });

    });
    





