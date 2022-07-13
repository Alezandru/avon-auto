const {I, testData, path} = inject();

module.exports = {
    pageTitle: '//*[@id="root"]/div[2]/div/div/div[1]/h1',

    isLoaded() {
        I.seeElement(this.pageTitle);
        I.seeTitleEquals(testData.findARepPageMetaTitle);
    },

    checkUrlIsCorrect() {
        I.seeCurrentUrlEquals(path.findARep);
    },

    checkPageMetaTitle() {
        I.seeTitleEquals(testData.findARepPageMetaTitle);
    },

}
