const {I, testData, path} = inject();

module.exports = {

    iframeVideoPlayer: '//*[@id="ls"]',
    imageSecondVideo: '//*[@id="root"]/div[2]/div/div/div/div/div[4]/div[1]/a/img',
    eventsSectionTitle: '//*[@id="root"]/div[2]/div/div/div/div/div[5]/div/h5[1]',
    liveEventsCarousel: '//*[@id="carousel"]',

    checkLiveShoppingPageUrl() {
        I.seeCurrentUrlEquals(path.liveShopping)
    },

    checkLiveShoppingPageMetaTitle() {
        I.seeElement(this.iframeVideoPlayer)
        I.seeTitleEquals(testData.liveShoppingPageMetaTitle)
    },

    checkLiveShoppingPageContent() {
        I.seeElement(this.iframeVideoPlayer)
        I.seeElement(this.imageSecondVideo)
        I.seeElement(this.eventsSectionTitle)
        I.seeElement(this.liveEventsCarousel)
    },


}
