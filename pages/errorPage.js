const {I, testData, landingPage} = inject();

module.exports = {
    sectionTitle: '//*[@id="root"]/div[2]/div/div/div/div/div/div[1]/h2',
    goBackToHomepage: '//*[@id="root"]/div[2]/div/div/div/div/div/div[1]/div[2]/p[1]/a',

    isOpened() {
        I.amOnPage(testData.errorPageUrl)
        I.seeElement(this.sectionTitle)
    },

    isLoaded() {
        I.seeElement(this.sectionTitle)
    },

    hasCorrectTitle() {
        I.seeTitleEquals(testData.errorPageMetaTitle)
    },

    contentIsLoaded() {
        I.see(testData.errorPageTitle)
        I.see(testData.errorPageReturnButton)
    },

    returnToHomepage() {
        I.click(this.goBackToHomepage)
        I.seeElement(landingPage.recommendedProducts)
    }
}
