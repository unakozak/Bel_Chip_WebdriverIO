const LoginPage = require('../pageobjects/LoginPage');
const SearchPage = require('../pageobjects/SearchPage');

    describe('BelChip web application SEARCH_PAGE', async () => {

        it('should search products and appear them on the screen', async () => {
            await LoginPage.login(validEmail, validPassword);
            await SearchPage.search(input);
            await SearchPage.devicesNames.forEach((el) => {
                expect(el.getText()).toHaveTextContaining(input);
            });
        });
        
    });
    





