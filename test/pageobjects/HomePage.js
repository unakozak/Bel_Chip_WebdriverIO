class HomePage {

    get header () {return $(".header"); }
    get newPrice () { return $(".device__price"); }
    get btnHoverCurrancy () { return ($$(".header-icons__icon.header-icon"))[1]; }
   
    get btnAddToFav () { return $$('.device__add')[5]; }
    get counter () { return $(".header-icon__counter"); }
    get arrayOfCurrencyBtns () { return $(".dropdown.header-icon__dropdown"); }

    btnNonActive(currencyValue) { 
        return $(`//a[@class="dropdown__item"][normalize-space()="${currencyValue}"]`); 
    }
    
    async changeCurrency (currencyValue) {
        await this.header.waitForExist();
        await this.btnHoverCurrancy.waitForDisplayed();
        await this.btnHoverCurrancy.moveTo();
        await this.btnNonActive(currencyValue).waitForDisplayed();
        await this.btnNonActive(currencyValue).click();
    }

    async addToFav () {
        await this.btnAddToFav.click();
        await this.counter.waitForDisplayed();
    }
}

module.exports = new HomePage();
