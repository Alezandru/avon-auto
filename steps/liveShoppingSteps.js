const { liveShoppingPage } = inject();

module.exports = {

    userChecksLiveShoppingPageUrl() {
        liveShoppingPage.checkLiveShoppingPageUrl()
    },

    userChecksLiveShoppingPageMetaTitle() {
        liveShoppingPage.checkLiveShoppingPageMetaTitle()
    },

    liveShoppingPageContentIsDisplayed() {
        liveShoppingPage.checkLiveShoppingPageContent()
    }

}
