class CatalogPage {

    get btnCatalog () { return $('div.main-menu__item a[href="catalog/"]')}
    get filter () { return $("div.filter__item")}
    get btnApplyFilter () { return $(".button.apply_filter")}
    get hrefInCart () { return $(".cart-item .cart-item__name  a")}
    get filteritenmActive () {return $(".filter__item.active")}
    get btnSubmit () { return $$("//button[contains(text(),'Купить')]")[1]}
    get devicesNamesAfterFilter () {return $$('.device__name div')}
    get imgOfDevice(){return $$("img.main-pic")[0]}
    get inputField () { return $("input[type = 'number']")}
    get btnBuyDevice(){return $(".product-order__order button[type='submit']")}
    get counter () { return $("#cart_ajax div.header-icon__counter")}
    get filteredLabelOfRFirm (){return $(".filtered-item__label")}
    inputCheckBox(firm) { return $(`input[value="${firm}"]`)}
    categoryMain(ctgr1) { return $(`img[alt="${ctgr1}"]`)}
    categorySecond(ctgr2) { return $(`img[alt="${ctgr2}"]`)}

    async searchDeviceWithCatalog (ctgr1, ctgr2, firm) {
        await browser.reloadSession();
        await browser.url("/");
        await this.btnCatalog.waitForDisplayed();
        await this.btnCatalog.click();
        await this.categoryMain(ctgr1).waitForDisplayed();
        await this.categoryMain(ctgr1).click();
        await this.categorySecond(ctgr2).waitForDisplayed();
        await this.categorySecond(ctgr2).click();
        await this.filter.waitForDisplayed();
        await this.inputCheckBox(firm).click();
        await this.btnApplyFilter.click();
        await this.filteredLabelOfRFirm.waitForDisplayed;
    } 

    async getAttributeHref(){
        return await this.hrefInCart.getAttribute("href");
    }
    async addToCartFromCatalog(){
        await this.imgOfDevice.waitForDisplayed();
        await this.imgOfDevice.click();
        await this.inputField.waitForDisplayed();
        await this.inputField.setValue(1);
        await this.btnBuyDevice.waitForDisplayed();
        await this.btnBuyDevice.click();  
        await this.counter.waitForDisplayed();
    }
}

module.exports = new CatalogPage();
