const { I } = inject();

module.exports = {

    bagTitle: '/html/body/div[9]/div[3]/div/div/div/div[1]/div[1]',
    closeButton: "/html/body/div[13]/div[3]/button",

    checkBarIsOpen() {
        I.seeElement(this.bagTitle)
    },

    checkBarIsClosed() {
        I.dontSeeElement(this.bagTitle)
    },

}
