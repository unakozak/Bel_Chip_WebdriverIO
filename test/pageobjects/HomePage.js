class HomePage {

    get header () {return $(".header"); }
    get newPrice () { return $(".device__price"); }
    get btnHoverCurrancy () { return ($$(".header-icons__icon.header-icon"))[1]; }
    get btnNonActive () { return $('//a[@class="dropdown__item"][normalize-space()="RUR"]'); }
    get btnAddToFav () { return $$('.device__add')[5]; }
    get counter () { return $(".header-icon__counter"); }
    get arrayOfCurrencyBtns () { return $(".dropdown.header-icon__dropdown"); }

    
    async changeCurrency () {
        await this.header.waitForExist();
        await this.btnHoverCurrancy.waitForDisplayed();
        await this.btnHoverCurrancy.moveTo();
        await this.btnNonActive.waitForDisplayed();
        await this.btnNonActive.click();
    }

    async addToFav () {
        await this.btnAddToFav.click();
        await this.counter.waitForDisplayed();
    }
}

module.exports = new HomePage();
