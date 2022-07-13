const { I, testData, path } = inject();

module.exports = {

    getPaidSectionTitle: '//*[@id="root"]/div[2]/div/div/div/div/div[4]/h5',
    thinkBigSectionTitle: '//*[@id="root"]/div[2]/div/div/div/div/div[6]/h5',
    startEarningButton: '//*[@id="root"]/div[2]/div/div/div/div/div[9]/div[1]/a/button',



    checkBecomeRepPageUrl() {
        I.seeCurrentUrlEquals(path.becomeRep)
    },

    checkBecomeRepPageMetaTitle() {
        I.seeElement(this.getPaidSectionTitle)
        I.seeTitleEquals(testData.becomeRepMetaPageTitle)
    },

    checkBecomeRepPageContent() {
        I.seeElement(this.getPaidSectionTitle)
        I.see(testData.becomeRepGetPaidSectionTitleText, 'h5')
        I.seeElement(this.thinkBigSectionTitle)
        I.see(testData.becomeRepThinkBigSectionTitleText, 'h5')
        I.seeElement(this.startEarningButton)
    },


}
