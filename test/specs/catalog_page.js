const CatalogPage = require('../pageobjects/CatalogPage');
const ShopPage = require('../pageobjects/ShopPage');

    describe('BelChip web application CATALOG_PAGE', async () => {
    
            it('should add products to cart using "Каталог"', async () => {
                await browser.url("/");
                await CatalogPage.addToCartFromCatalog();
                const checkFilterActive = await CatalogPage.filteritenmActive.getCSSProperty('background-color');
                expect(await checkFilterActive).toHaveTextContaining(greenColor);
                await ShopPage.btnSubmit.click(); 
                browser.pause(5000);
                await ShopPage.checkCart();
                expect(browser.getTitle()).toHaveTextContaining('cart');
                expect(await ShopPage.hrefinCart.getAttribute("href")).toHaveTextContaining("product");
            });
            
    });
    