const {I, testData} = inject();

module.exports = {

    searchBarTitle: '/html/body/div[9]/div[3]/div/div/strong',
    searchBarText: '/html/body/div[9]/div[3]/div/div/div/div[2]',

    userChecksSearchBarIsOpen() {
        I.seeElement(this.searchBarTitle)
        I.see(testData.searchBarTitle)
        I.seeElement(this.searchBarText)
        I.see(testData.searchBarText)
    }

}
