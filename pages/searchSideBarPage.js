const {I} = inject();

module.exports = {

    barTitle: '/html/body/div[9]/div[3]/div/div/strong',
    closeButton: "/html/body/div[13]/div[3]/button",

    checkBarIsOpen() {
        I.seeElement(this.barTitle)
    },

}
