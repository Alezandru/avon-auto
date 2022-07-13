const {landingPage} = inject();

module.exports = {
    landingpageIsOpen() {
        landingPage.isOpened();
        landingPage.isLoaded();
    },

    landingpageIsLoaded() {
        landingPage.isLoaded();
    },

    pageHasCorrectTitle() {
        landingPage.hasCorrectTitle();
    },

    landingPageContentIsLoaded() {
        landingPage.hasLoadedSections()
    },

    userNavigatesToProductPage() {
        landingPage.navigateToProductPage()
    }


}
