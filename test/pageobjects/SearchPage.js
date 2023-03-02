class SearchPage {
    
    get serchField () { return $("input#q-ipt")}
    get btnSearch () { return $("button[class='button header-search__button']")}
    get device () { return $("div.devices__wrap")}

    async search (input) {
        await this.serchField.setValue(input);
        await this.btnSearch.click();
        await this.device.waitForExist({ timeout: 1000 });
    } 
}

module.exports = new SearchPage();
