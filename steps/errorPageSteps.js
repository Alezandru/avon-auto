const { errorPage, landingPage } = inject();

module.exports = {

    errorPageIsOpen(){
        errorPage.isOpened()
        errorPage.isLoaded()
        errorPage.hasCorrectTitle()
        errorPage.contentIsLoaded()
    },

    userCanReturnToHomepage() {
        errorPage.returnToHomepage()
        landingPage.isLoaded()
    }

}
