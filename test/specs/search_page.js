const LoginPage = require('../pageobjects/LoginPage');
const SearchPage = require('../pageobjects/SearchPage');

    describe('BelChip web application LOGIN_PAGE', async () => {

        it('should search products and appear them on the screen', async () => {
            await LoginPage.login(validEmail, validPassword);
            await SearchPage.search(input);
            await browser.pause(1000);
        });
        
    });
    





