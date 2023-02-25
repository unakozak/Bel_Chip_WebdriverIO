const LoginPage = require('../pageobjects/LoginPage');
const CatalogPage = require('../pageobjects/CatalogPage');
const ShopPage = require('../pageobjects/ShopPage');
const fs = require('fs');




let validCredentials = JSON.parse(fs.readFileSync("test/testdata/validCred.json"));

    describe('BelChip web application CATALOG_PAGE', async () => {
    
        validCredentials.forEach( ({email, password}) => {
            it('should add products to cart using "Каталог"', async () => {
                await browser.url('/');
                await LoginPage.login(email, password);
                await browser.pause(1000);
                await CatalogPage.addToCart();
                await ShopPage.checkCart();
            });
        });

    });
    