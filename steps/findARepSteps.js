const {findARepPage} = inject();

module.exports = {

    userChecksPageUrl() {
        findARepPage.checkUrlIsCorrect()
    },

    userChecksPageMetaTitle() {
        findARepPage.checkPageMetaTitle()
    },

}
