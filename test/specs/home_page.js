const HomePage = require('../pageobjects/HomePage');
    
    describe('BelChip web application HOME_PAGE', async () => {
    
        it('should change the display of the cost of goods from BYN to RUR', async () => {
            await browser.url('/');
            await HomePage.change();
        });

        it('should add products to favorites', async () => {
            await browser.url('/');
            await HomePage.addToFav();
        });

    });
    





