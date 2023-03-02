class LoginPage {
    
    get hoverBtnSubmit () { return $('div.header__column.header__column_links.header-icons div:nth-child(5)')}
    get dropdownPopupSubmit () { return $(".dropdown__item[href='#']")}
    get inptEmail () { return $('div.form__item input[name = "login"]')}
    get inptPassword () { return $('div.form__item input[name = "password"]')}
    get btnSubmit () { return $('button.button_big[type = "submit"]')}
    get alertDanger() { return $('div.alert.alert-danger')}
    get loginIdentifier() { return $('div.header-icon__info a[href = "personal/"]')}
    get logoImage() { return $('.logo__image')}

    async login (email, password) {
        await browser.url('/');
        await this.hoverBtnSubmit.moveTo();
        await this.dropdownPopupSubmit.waitForDisplayed();
        await this.dropdownPopupSubmit.click();
        await this.inptEmail.waitForDisplayed();
        await this.inptEmail.setValue(email);
        await this.inptPassword.setValue(password);
        await this.btnSubmit.click();
        await this.logoImage.waitForDisplayed();
    } 
}

module.exports = new LoginPage();
