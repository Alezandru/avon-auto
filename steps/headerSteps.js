const {headerPage, findARepPage} = inject();

module.exports = {

    userClicksOnLogo() {
        headerPage.clickLogo()
    },

    // Top row buttons:
    userNavigatesToFindARepresentativePage() {
        headerPage.clickFindARepButton()
        findARepPage.isLoaded()
    },

    userOpensSignInModal() {
        headerPage.clickSignInButton()
        // TODO add .isLoaded() method
    },

    userChecksHeIsLoggedIn() {
        headerPage.checkHeaderGreetingMessage()
    },

    userOpensShoppingBagSideMenu() {
        headerPage.clickShoppingBagButton()
        // TODO add .isLoaded() method
    },

    userClosesShoppingBagSideMenu() {
        headerPage.closeSideBar()
    },

    userOpensSearchBar() {
        headerPage.clickSearchBarButton()
        // TODO add .isLoaded() method
    },

    userClosesSearchBar() {
        headerPage.closeSideBar()
    },

    // Header menu buttons
    userOpensShopDropdown() {
        headerPage.openShopDropdown()
    },

    userOpensFeaturedDropdown() {
        headerPage.openFeaturedDropdown()
    },

    userClicksLiveShoppingButton() {
        headerPage.clickLiveShoppingButton()
    },

    userOpensSpecialOffersDropdown() {
        headerPage.openSpecialOffersDropdown()
    },

    userClicksSpecialOffersButton() {
        headerPage.clickSpecialOffersButton()
    },

    userOpensDigitalBrochureDropdown() {
        headerPage.openDigitalBrochureDropdown()
    },

    userClicksDigitalBrochureButton() {
        headerPage.clickDigitalBrochureButton()
    },

    userClicksBecomeARepButton() {
        headerPage.clickBecomeARepButton()
    },

    userClicksInsiderBlogButton() {
        headerPage.clickInsiderBlogButton()
    },


}
