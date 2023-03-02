# Bel_Chip_WEbdriverIO

This is a testing project that uses WebdriverIO  and JavaScript. This project is useful not only as an example of WebdriverIO and JavaScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started
````md
```js
git clone "https://github.com/unakozak/bel_chip_framework.git"
cd "bel_chip_framework"
npm install
npx wdio run .\wdio.conf.js
```
````
## Why I choose JavaScript
JavaScript offers the benefit of functions, OOP paradigm and etc, but you won't find them in this project. I have found JavaScript to be great because of the IDE and support for the latest JavaScript features:


## Page Objects
Page Objects are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like loginWithCredentials() that allow you to write more concise tests.

````md
```js
src/pages/LoginPage.ts
import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}
```
````
## Test examples
The tests in this project use https://www.microsoft.com/en-us/edge to demonstrate how to interact with some of the most common UI elements you will encounter. Including: dropdowns, basic auth, dynamic loading (waitUntil) and javascript alerts. 

## Reporters
This projects uses both the spec-reporter and allure-reporter. The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run npm run report to generate the allure report. It's nifty.

Allure Overview: allure