
class ShopPage {

    get device () {
        return $('//div[@class = "device"][1]');
    }
    get inputField () {
        return $("//input[@name='qty']");
    }
    get btnSubmit () {
        return $("//button[contains(text(),'Купить')]");
    }
    get counter () {
        return $("//div[@id='cart_ajax']//div[@class='header-icon__counter'][normalize-space()='1']");
    }
    get  btnCart (){
        return $("div[id='cart_ajax'] div[class='header-icon__info'] a:nth-child(1)");
    }
    get hrefinCart () {
        return $(".cart-item .cart-item__name  a");
    }

    async addToCart () {
        await this.device.waitForDisplayed();
        await this.device.click();
        await this.inputField.setValue(2);
        await this.btnSubmit.click();  
    } 

    async checkCart () {   
        await this.btnCart.click();
        const href_2 = await this.hrefinCart.getAttribute("href");
        expect(await browser.getTitle()).toHaveTextContaining("cart");
        await browser.pause(1000);
        expect(await href_2).toHaveTextContaining("product");
    }
}

module.exports = new ShopPage();
