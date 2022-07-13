const {shoppingBagSideBarPage} = inject();

module.exports = {

    userCheckShoppingBagSideMenuIsOpen() {
        shoppingBagSideBarPage.checkBarIsOpen()
    },

    userCheckShoppingBagSideMenuIsClosed() {
        shoppingBagSideBarPage.checkBarIsClosed()
    },


}
