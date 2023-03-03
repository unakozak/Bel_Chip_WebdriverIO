class SearchPage {
    
    get searchField () { return $("input#q-ipt")}
    get btnSearch () { return $("button[class='button header-search__button']")}
    get devicesNames () {return $$(".devices .device__name a[href ^='product/?selected_product']")}
   
    async search(input) {
        await this.searchField.setValue(input);
        await this.btnSearch.click();
    } 
}

module.exports = new SearchPage();
