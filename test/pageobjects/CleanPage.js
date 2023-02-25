
class CleanPage {

    get hrefOfDevice () {
        return $(".devices__wrap .device:nth-child(9) .device__name a");
    }  

    get hrefinCart () {
        return $(".cart-item .cart-item__name  a");
    }
    
    get btnClean () {
        return $("#tab_cart .cart-total__buttons a");
    }


    get btnClean () {
        return $("#tab_cart .cart-total__buttons a");
    }

    async cleanCart (){
        await this.btnClean.waitForExist();
        await this.btnClean.click();
        await browser.acceptAlert();
        await expect(await this.hrefinCart).not.toExist();
    }
}

module.exports = new CleanPage();
