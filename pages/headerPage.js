const {I, testData} = inject();

module.exports = {
    logo: '//*[@id="root"]/header/div[2]/div[1]/span',
    findARepButton: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[1]/a',
    signInButton: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[2]/button',
    shoppingBagButton: '//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[1]/button',
    searchBarButton: '//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[2]/button',
    headerDropdownUserLoggedIn: '//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[1]/div/div/button/div',
    closeSearchSidebarButton: '/html/body/div[9]/div[3]/button',
    closeSideBarButton: '/html/body/div[9]/div[3]/button',
    shopDropdown: '//*[@id="root"]/header/div[3]/div/div[1]/div[1]/div',
    featuredDropdown: '//*[@id="root"]/header/div[3]/div/div[1]/div[2]/div',
    liveShoppingButton: '//*[@id="root"]/header/div[3]/div/div[1]/div[3]/a',
    specialOffersButton: '//*[@id="root"]/header/div[3]/div/div[1]/div[4]/a',
    digitalBrochureButton: '//*[@id="root"]/header/div[3]/div/div[1]/div[5]/a',
    becomeARepButton: '//*[@id="root"]/header/div[3]/div/div[1]/div[6]/a',
    insiderBlogButton: '//*[@id="root"]/header/div[3]/div/div[1]/div[7]/a',
    signInOverlayMessage: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[2]/div',
    signInOverlayMessage2: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[2]/div/svg',
    signInOverlayMessage3: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[2]/div/svg/path[1]',
    signInOverlayMessage4: '//*[@id="root"]/header/div[2]/div[2]/ul[1]/li[2]/div/svg/path[2]',


    appLogoIsDisplayed() {
        I.seeElement(this.logo)
    },

    clickLogo() {
        this.appLogoIsDisplayed()
        I.click(this.logo)
    },

    clickFindARepButton() {
        I.click(this.findARepButton);
    },

    clickSignInButton() {
        I.click(this.signInButton);
    },

    closeSideBar() {
        I.seeElement(this.closeSideBarButton)
        I.click(this.closeSideBarButton)
        I.waitToHide(this.closeSideBarButton)
        I.dontSeeElement(this.closeSideBarButton)
    },

    checkHeaderGreetingMessage() {
        I.seeElement(this.headerDropdownUserLoggedIn)
        I.see(testData.hiMessageText)
    },

    clickShoppingBagButton() {
        I.click(this.shoppingBagButton);
    },

    clickSearchBarButton() {
        I.click(this.searchBarButton);
    },

    openShopDropdown() {
        I.moveCursorTo(this.shopDropdown)
    },

    openFeaturedDropdown() {
        I.moveCursorTo(this.featuredDropdown)
    },

    clickLiveShoppingButton() {
        I.click(this.liveShoppingButton)
    },

    openSpecialOffersDropdown() {
        I.moveCursorTo(this.specialOffersButton)
    },

    clickSpecialOffersButton() {
        I.click(this.specialOffersButton)
    },

    openDigitalBrochureDropdown() {
        I.moveCursorTo(this.digitalBrochureButton)
    },

    clickDigitalBrochureButton() {
        I.click(this.digitalBrochureButton)
    },

    clickBecomeARepButton() {
        /*  without the wait, the overlay is intercepting the click
            getting hold of the overlay xpath/css is tricky as it
            disappears after interacting with it (time consuming)   */
        I.wait(2)
        I.click(this.becomeARepButton)
    },

    clickInsiderBlogButton() {
        /* the same overlay issue as above */
        I.wait(2)
        I.click(this.insiderBlogButton)
    }

}
