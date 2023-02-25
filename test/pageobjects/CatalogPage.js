class CatalogPage {


    get btnCatalog () {
        return $('div.main-menu__item a[href="catalog/"]');
    }

    get category () {
        return $("//div[@class='sections']//div[4]");
    }

    get filter () {
        return $("div.filter__item");
    }
    get inputCheckBox () {
        return $('input[type = "checkbox"][value = "Haitronic"]');
    }
    get btnApplyFilter () {
        return $(".button.apply_filter");
    }
    get filteritenmActive () {
        return $(".filter__item.active");
    }
    get btnSubmit () {
       return $("//button[contains(text(),'Купить')]") ;
    }

    
    async addToCart () {
        await this.btnCatalog.click();
        expect(browser).toHaveTitleContaining("catalog");
        await this.category.waitForDisplayed();
        await this.category.click();
        await this.category.waitForDisplayed();
        await this.category.click();
        await this.filter.waitForDisplayed();
        await this.inputCheckBox.click();
        await this.btnApplyFilter.click();
        const checkFilterActive = await this.filteritenmActive.getCSSProperty('background-color');
        expect(checkFilterActive).toHaveTextContaining("#ACD7A5");
        await this.btnSubmit.waitForDisplayed();
        await this.btnSubmit.click();
    } 
}

module.exports = new CatalogPage();
