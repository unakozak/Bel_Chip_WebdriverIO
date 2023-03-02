class CatalogPage {

    get btnCatalog () { return $('div.main-menu__item a[href="catalog/"]')}
    get category () { return $("//div[@class='sections']//div[4]")}
    get filter () { return $("div.filter__item")}
    get inputCheckBox () { return $$("div.filter__values .filter__value input")[18];}
    get btnApplyFilter () { return $(".button.apply_filter")}
    get filteritenmActive () {return $(".filter__item.active")}
    get btnSubmit () { return $$("//button[contains(text(),'Купить')]")[1]}

    async addToCartFromCatalog () {
        await this.btnCatalog.click();
        await this.category.waitForDisplayed();
        await this.category.click();
        await this.category.waitForDisplayed();
        await this.category.click();
        await this.filter.waitForDisplayed();
        await this.inputCheckBox.click();
        await this.btnApplyFilter.click();
    } 
}

module.exports = new CatalogPage();
