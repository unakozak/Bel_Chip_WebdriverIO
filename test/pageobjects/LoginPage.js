class LoginPage {
    
    get hoverBtnSubmit () { return $('div.header__column.header__column_links.header-icons div:nth-child(5)')}
    get dropdownPopupSubmit () { return $(".dropdown__item[href='#']")}
    get inptEmail () { return $('div.form__item input[name = "login"]')}
    get inptPassword () { return $('div.form__item input[name = "password"]')}
    get btnSubmit () { return $('button.button_big[type = "submit"]')}
    get alertDanger() { return $('div.alert.alert-danger')}
    get loginIdentifier() { return $('div.header-icon__info a[href = "personal/"]')}
    get loginModalWindow () { return $("#login_form_popup")}


    async login (email, password, isSuccess = true) {
        await browser.reloadSession();
        await browser.url('/');
        await this.hoverBtnSubmit.moveTo();
        await this.dropdownPopupSubmit.waitForDisplayed();
        await this.dropdownPopupSubmit.click();
        await this.inptEmail.waitForDisplayed();
        await this.inptEmail.setValue(email);
        await this.inptPassword.setValue(password);
        await this.btnSubmit.click();     
        if(isSuccess === true){
            await this.loginIdentifier.waitForDisplayed();
            await this.loginModalWindow.waitForDisplayed({reverse : true});
        }
    } 
}

module.exports = new LoginPage();
