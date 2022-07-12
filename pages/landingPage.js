const {I, testData} = inject();

module.exports = {
    recommendedProducts: '//*[@id="root"]/div[2]/div/div/div[3]/div/div/strong',
    digitalBrochure: '//*[@id="root"]/div[2]/div/div/div[5]/div/div/div/h3',
    nowAtAvon: '//*[@id="root"]/div[2]/div/div/div[6]/div/header/strong',
    ourMission: '//*[@id="root"]/div[2]/div/div/div[8]/div/strong',
    signUpMailingList: '//*[@id="root"]/footer/div[1]/div/button',


    isOpened() {
        I.amOnPage('/');
    },

    isLoaded() {
        I.seeElement(this.recommendedProducts);
    },

    hasCorrectTitle(){
        I.seeTitleEquals(testData.landingpageTitle);
    },

    hasLoadedSections(){
        I.see(testData.recommendedSectionTitle)
        I.see(testData.spotlightSectionTitle)
        I.see(testData.digitalBrochureSectionTitle, 'h3')
        I.scrollIntoView(this.digitalBrochure)
        I.seeElement(this.nowAtAvon)
        I.see(testData.nowAtAvonSectionTitle)
        I.see(testData.becomeMemberSectionTitle)
        I.scrollIntoView(this.ourMission)
        I.see(testData.ourMissionSectionTitle)
        I.seeElement(this.signUpMailingList)
        I.scrollPageToBottom();
        I.see(testData.footerAvonCommunity)
        I.see(testData.followUs)
    }
}