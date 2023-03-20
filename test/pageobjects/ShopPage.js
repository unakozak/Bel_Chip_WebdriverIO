class ShopPage {

    get device () { return $$("div.device .device__image")[1]}
    get inputField () { return $("//input[@name='qty']")}
    get btnSubmit () { return $("//button[contains(text(),'Купить')]")}
    get btnBuyDevice(){return $(".product-order__order button[type='submit']")}
    get btnCatalogSubmit () { return $$(".devices__wrap button[type='submit']")[0]}
    get counter () { return $("#cart_ajax div.header-icon__counter")}
    get btnCart (){ return $("#cart_ajax .header-icon__info")}
    get hrefinCart () { return $(".cart-item .cart-item__name  a")}
    get btnClean () { return $("#tab_cart .cart-total__buttons a")}
    get cartItemCode() {return $(".cart-items__head")}
    get title(){return $(".title.title_1")}
    //checkCart method
    get cartAjax(){return $("#cart_ajax")}
    get btnGoToCart(){return $(".dd-cart__button")}

    async addToCart () {
        await this.device.waitForDisplayed();
        await this.device.click();
        await this.title.waitForDisplayed();
        await this.inputField.waitForDisplayed();
        await this.inputField.setValue(1);
        await this.btnBuyDevice.waitForDisplayed();
        await this.btnBuyDevice.click(); 
        await browser.pause(2000);
    } 
    async checkCart () {   
        await this.cartAjax.moveTo();
        await this.btnGoToCart.waitForDisplayed();
        await this.btnGoToCart.click();
        await browser.pause(2000);
    }
    async cleanCart (){
        await this.btnClean.waitForExist();
        await this.btnClean.click();
        await browser.pause(2000);
        await browser.acceptAlert();
    }
    async clickBtnSubmit(){
        await browser.pause(1000);
        await this.btnCatalogSubmit.click(); 
        await this.counter.waitForDisplayed();
    }
    async isCounterDisplayed(){
        return await this.counter.isDisplayed();
    }
    async isItemDisplayedInCart(){
        return this.cartItemCode.isDisplayed();
    }
    async getAttributeHref(){
        return this.hrefInCart.getAttribute("href");
    }
    
}

module.exports = new ShopPage();
