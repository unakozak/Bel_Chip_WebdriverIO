const CatalogPage = require('../pageobjects/CatalogPage');
const ShopPage = require('../pageobjects/ShopPage');

describe('BelChip web application CATALOG_PAGE', async () => {

    it('should add products to cart using "Каталог"', async () => {
        await CatalogPage.addToCartFromCatalog(ctgr1, ctgr2, firm);
        await CatalogPage.devicesNamesAfterFilter.forEach(el => {expect(el.getText()).toHaveTextContaining(firm)});
        await ShopPage.clickBtnSubmit();
        await ShopPage.checkCart();
        expect(await ShopPage.hrefinCart.getAttribute("href")).toHaveTextContaining("product");
    });
});
    