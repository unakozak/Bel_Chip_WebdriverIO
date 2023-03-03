class CatalogPage {

    get btnCatalog () { return $('div.main-menu__item a[href="catalog/"]')}
    categoryMain(ctgr1) { return $(`img[alt="${ctgr1}"]`)}
    categorySecond(ctgr2) { return $(`img[alt="${ctgr2}"]`)}
    get filter () { return $("div.filter__item")}
    inputCheckBox(firm) { return $(`input[value="${firm}"]`)}
    get btnApplyFilter () { return $(".button.apply_filter")}
    get filteritenmActive () {return $(".filter__item.active")}
    get btnSubmit () { return $$("//button[contains(text(),'Купить')]")[1]}
    get devicesNamesAfterFilter () {return $$('.device__name div')}

    async addToCartFromCatalog (ctgr1, ctgr2, firm) {
        await browser.reloadSession();
        await browser.url("/");
        await this.btnCatalog.click();
        await this.categoryMain(ctgr1).waitForDisplayed();
        await this.categoryMain(ctgr1).click();
        await this.categorySecond(ctgr2).waitForDisplayed();
        await this.categorySecond(ctgr2).click();
        await this.filter.waitForDisplayed();
        await this.inputCheckBox(firm).click();
        await this.btnApplyFilter.click();
    } 
}

module.exports = new CatalogPage();
