
class ShopPage {

    get device () { return $$("div.device")[1]}
    get inputField () { return $("//input[@name='qty']")}
    get btnSubmit () { return $("//button[contains(text(),'Купить')]")}
    get counter () { return $("#cart_ajax div.header-icon__counter")}
    get btnCart (){ return $("#cart_ajax .header-icon__info")}
    get hrefinCart () { return $(".cart-item .cart-item__name  a")}
    get hrefOfDevice () { return $(".devices__wrap .device:nth-child(9) .device__name a")}  
    get hrefinCart () { return $(".cart-item .cart-item__name  a")}
    get btnClean () { return $("#tab_cart .cart-total__buttons a")}
    get btnClean () { return $("#tab_cart .cart-total__buttons a")}

    async addToCart () {
        await this.device.click();
        await this.inputField.setValue(1);
        await this.btnSubmit.click();  
    } 

    async checkCart () {   
        await this.btnCart.waitForDisplayed();
        await this.btnCart.click();
    }
    
    async cleanCart (){
        await this.btnClean.waitForExist();
        await this.btnClean.click();
        await browser.acceptAlert();
        await expect(await this.hrefinCart).not.toExist();
    }
}

module.exports = new ShopPage();
