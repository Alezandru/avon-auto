const {testData, headerPage, signInModalPage} = inject();

module.exports = {

    userLogsIn() {
        headerPage.clickSignInButton()
        signInModalPage.inputEmail(testData.emailAddress)
        signInModalPage.clickContinueToSignButton()
        signInModalPage.inputPassword(testData.password)
        signInModalPage.clickSignInAccountButton()
    },

    checkSignInModalFirstScreen() {
        signInModalPage.checkModalFirstScreenText()
    },

    checkSignInModalSecondScreen() {
        signInModalPage.checkModalSecondScreenText()
    },

    userClosesSignInModal(){
        signInModalPage.closeModal()
    },

    userChecksModalIsClosed(){
        signInModalPage.checkModalIsClosed()
    },




}
