const LoginPage = require('../pageobjects/LoginPage');

    describe('BelChip web application LOGIN_PAGE', async () => {
    
            it('should login with invalid credentials', async () => {
                await LoginPage.login(invalidEmail, invalidPassword);
                await (LoginPage.alertDanger).waitForDisplayed();
                await expect(await LoginPage.alertDanger).toBeDisplayed();
                await browser.refresh();
            });

            it('should login with valid credentials', async () => {
                await LoginPage.login(validEmail, validPassword);
                await expect(await LoginPage.loginIdentifier).toBeDisplayed();
                await browser.refresh();
            });
    });
    





