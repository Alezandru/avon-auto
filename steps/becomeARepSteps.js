const { becomeARepPage } = inject();

module.exports = {

    userCheckBecomeRepPageTitle() {
        becomeARepPage.checkBecomeRepPageMetaTitle()
        becomeARepPage.checkBecomeRepPageUrl()
    },

    userChecksBecomeRepPageContentIsDisplayed() {
        becomeARepPage.checkBecomeRepPageContent()
    }


}
