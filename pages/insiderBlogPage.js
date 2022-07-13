const { I, testData } = inject();

module.exports = {

    insiderPageTitle: '//*[@id="root"]/div[2]/div/div[1]/div[1]/h1/a',
    firstInsiderTab: '//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[1]/span',
    secondInsiderTab: '//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[2]/span',
    thirdInsiderTab: '//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[3]/span',

    checkInsiderBlogPageTitle() {
        I.seeElement(this.insiderPageTitle)
        I.seeTitleEquals(testData.insiderBlogPageMetaTitle)
    },

    checkPageContentIsDisplayed() {
        I.seeElement(this.insiderPageTitle)
        I.see(testData.insiderBlogPageTitle, 'h1')
        I.see(testData.insiderBlogPageFirstTabText)
        I.see(testData.insiderBlogPageSecondTabText)
        I.see(testData.insiderBlogPageThirdTabText)
    }



}
