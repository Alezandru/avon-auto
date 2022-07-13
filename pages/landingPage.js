const {I, testData, utils} = inject();

module.exports = {
    recommendedProducts: '//*[@id="root"]/div[2]/div/div/div[3]/div/div/strong',
    productSpotlight: '//*[@id="root"]/div[2]/div/div/div[4]/div/div/header',
    digitalBrochure: '//*[@id="root"]/div[2]/div/div/div[5]/div/div/div/h3',
    nowAtAvon: '//*[@id="root"]/div[2]/div/div/div[6]/div/header/strong',
    becomeAvonMember: '//*[@id="root"]/div[2]/div/div/div[7]/div/div[1]/strong',
    ourMission: '//*[@id="root"]/div[2]/div/div/div[8]/div/strong',
    signUpMailingList: '//*[@id="root"]/footer/div[1]/div/button',
    toProductPageButton: '//*[@id="root"]/div[2]/div/div/div[1]/div/div/div/a/div/div/div[1]/div[1]/button',


    isOpened() {
        I.amOnPage('/');
    },

    isLoaded() {
        utils.scrollDownABit()
        I.seeElement(this.recommendedProducts);
        utils.scrollUpABit()
    },

    hasCorrectTitle(){
        I.seeTitleEquals(testData.landingpageTitle);
    },

    hasLoadedSections(){
        /* I used 'PageDown' to scroll bit by bit in the page
        in order to have the elements loaded in the page (lazyloader-wrapper)
        TODO improve code / remove duplicate lines
         */

        utils.scrollDownABit();
        I.seeElement(this.recommendedProducts)
        I.see(testData.recommendedSectionTitle)
        utils.scrollDownABit();
        I.seeElement(this.productSpotlight)
        I.see(testData.spotlightSectionTitle)
        utils.scrollDownABit();
        I.seeElement(this.digitalBrochure)
        I.see(testData.digitalBrochureSectionTitle, 'h3')
        utils.scrollDownABit();
        I.seeElement(this.nowAtAvon)
        I.see(testData.nowAtAvonSectionTitle)
        utils.scrollDownABit();
        I.seeElement(this.becomeAvonMember)
        I.see(testData.becomeMemberSectionTitle)
        utils.scrollDownABit();
        I.seeElement(this.ourMission)
        I.see(testData.ourMissionSectionTitle)
        utils.scrollDownABit();
        I.seeElement(this.signUpMailingList)
        utils.scrollDownABit();
        I.see(testData.footerAvonCommunity)
        I.see(testData.followUs)
    },

    navigateToProductPage(){
        I.click(this.toProductPageButton)
    }
}
