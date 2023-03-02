class BasePage {
    
    async waitAndClick(value) {
        await value.waitForDisplayed();
        await value.click();
    } 
}

module.exports = new BasePage();
