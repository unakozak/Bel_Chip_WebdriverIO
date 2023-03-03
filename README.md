# Bel_Chip_WebdriverIO

This is a testing project that uses WebdriverIO  and JavaScript. This project is useful not only as an example of WebdriverIO and JavaScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started

```js
git clone "https://github.com/unakozak/bel_chip_framework.git"
cd "bel_chip_framework"
npm install
npx wdio run ./wdio.conf.js
```

## Why I choose JavaScript
JavaScript offers the benefit of functions, OOP paradigm and etc, but you won't find them in this project. I have found JavaScript to be great because of the IDE and support for the latest JavaScript features:


## Page Objects
Page Objects are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like loginWithCredentials() that allow you to write more concise tests.


```js
"test/pageobjects/LoginPage.js"

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
```

## Global Constants 
The config file has a block of global const, such as: email, password, etc., which are used to organize all the necessary string information in one place and then use it in PageObjects.
```json
before: function (capabilities, specs) {
        global.validPassword = "1234567890koz";
        global.validEmail = "una.kozak@mail.ru";
        global.invalidEmail = "$$rerror@mail.com";
        global.invalidPassword = "$%Error";
    },
```
## Test examples
The tests in this project use https://www.microsoft.com/en-us/edge to demonstrate how to interact with some of the most common UI elements you will encounter. Including: dropdowns, basic auth, dynamic loading (waitUntil) and javascript alerts. 

## Reporters
This projects uses both the spec-reporter and allure-reporter. The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run npm run report to generate the allure report. It's nifty.

Allure Overview: allure