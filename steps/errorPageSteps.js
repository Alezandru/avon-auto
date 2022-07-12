const { I, errorPage, landingPage } = inject();

module.exports = {

    errorPageIsOpen(){
        errorPage.isOpened()
        errorPage.isLoaded()
        errorPage.hasCorrectTitle()
        errorPage.contentIsLoaded()
    },

    userReturnsToHomepage() {
        errorPage.returnToHomepage()
        landingPage.isLoaded()
    }

}
