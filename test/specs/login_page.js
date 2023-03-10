const LoginPage = require('../pageobjects/LoginPage');

    describe('BelChip web application LOGIN_PAGE', async () => {
    
            it('should not login with invalid credentials', async () => {
                await LoginPage.login(invalidEmail, invalidPassword, false);
                await LoginPage.alertDanger.waitForDisplayed();
                await expect(await LoginPage.alertDanger).toBeDisplayed(); 
            });

            it('should login with valid credentials', async () => {
                await LoginPage.login(validEmail, validPassword, true);
                await expect(await LoginPage.loginIdentifier).toBeDisplayed();
            });
    });
    





