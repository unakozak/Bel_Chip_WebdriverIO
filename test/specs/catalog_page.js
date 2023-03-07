const CatalogPage = require('../pageobjects/CatalogPage');
const ShopPage = require('../pageobjects/ShopPage');
const expectChai = require('chai').expect;

describe('BelChip web application CATALOG_PAGE', async () => {

    it('should add products to cart using "Каталог"', async () => {
        await CatalogPage.searchDeviceWithCatalog(ctgr1, ctgr2, firm);
        await CatalogPage.devicesNamesAfterFilter.forEach(el => {expect(el.getText()).toHaveTextContaining(firm)});
        await browser.pause(3000);
        await CatalogPage.addToCartFromCatalog();
        await ShopPage.checkCart();
        expectChai(await CatalogPage.getAttributeHref()).to.include("product");
    });
});
    