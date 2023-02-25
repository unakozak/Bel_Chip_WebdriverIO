
class HomePage {

    get btnhoverBYN () {
        return $('.header-icon__icon img[src="img/icon-currency.png"]');
    }

    get btnRUR () {
        return $('.dropdown.header-icon__dropdown a.dropdown__item.active');
    }

    get newPrice () {
        return $(".device__price");
    }

    get btnAddToFav () {
        return $$('.device__add')[5];
    }

    get counter () {
        return $(".header-icon__counter");
    }

    async change () {
        await this.btnhoverBYN.moveTo();
        await this.btnRUR.click();
        expect(await this.newPrice.getValue()).toHaveTextContaining("рос.руб");
    }

    async addToFav () {
        await this.btnAddToFav.click();
        await this.counter.waitForDisplayed();
        expect(this.counter).toExist();
    }
}

module.exports = new HomePage();
