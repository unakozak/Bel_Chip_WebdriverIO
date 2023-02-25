class LoginPage {
    
    // define selectors using getter methods
    get hoverBtnSubmit () {
        return $('div.header__column.header__column_links.header-icons div:nth-child(5)');
    }
    get dropdownPopupSubmit () {
        return $(".dropdown__item[href='#']");
    }

    get inputEmail () {
        return $('div.form__item input[name = "login"]');
    }

    get inputPassword () {
        return $('div.form__item input[name = "password"]');
    }

    get btnSubmit () {
        return $('button.button_big[type = "submit"]');
    }
    get alertDanger() {
        return $('div.alert.alert-danger');
    }

    get closePopup () {
        return $("div[id='login_form'] img");
    }

    
    async login (email, password) {
        await this.hoverBtnSubmit.moveTo();
        await this.dropdownPopupSubmit.waitForDisplayed();
        await this.dropdownPopupSubmit.click();
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    } 
}

module.exports = new LoginPage();
