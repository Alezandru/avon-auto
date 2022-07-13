const {I, testData} = inject();

module.exports = {
    emailFieldTitle: '/html/body/div[9]/div/div[2]/div/form/div[1]/div[1]/strong/div',
    emailInputField: '/html/body/div[9]/div/div[2]/div/form/div[1]/div[2]/div/div/div/input',
    continueButton: '/html/body/div[9]/div/div[2]/div/form/button',
    passwordScreenText: '/html/body/div[9]/div/div[2]/div/form/div[1]/div[1]/strong',
    passwordInputField: '/html/body/div[9]/div/div[2]/div/form/div[1]/div[2]/div/div[2]/div/input',
    signInButton: '/html/body/div[9]/div/div[2]/div/form/button',
    closeModalButton: '/html/body/div[9]/div/div[1]/button',

    checkModalFirstScreenText() {
        I.seeElement(this.emailFieldTitle)
        I.see(testData.firstModalText)
    },

    checkModalSecondScreenText() {
        I.seeElement(this.passwordScreenText)
        I.see(testData.secondModalText)
    },

    inputEmail(emailAddress) {
        I.seeElement(this.emailFieldTitle)
        I.fillField(this.emailInputField, emailAddress)
    },

    clickContinueToSignButton() {
        I.seeElement(this.continueButton)
        I.click(this.continueButton)
    },

    inputPassword() {
        I.seeElement(this.passwordInputField)
        I.fillField(this.passwordInputField, testData.password)
    },

    clickSignInAccountButton() {
        I.click(this.signInButton)
    },

    closeModal() {
        I.click(this.closeModalButton)
    },

    checkModalIsClosed() {
        I.waitToHide(this.closeModalButton)
        I.dontSeeElement(this.closeModalButton)
    }

}
