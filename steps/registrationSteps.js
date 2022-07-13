const { registrationPage } = inject();

module.exports = {

    userIsOnRegistrationPage() {
        registrationPage.isOpen()
    },

    userFillsRegistrationFormWithExistingAccountEmail() {
        registrationPage.fillRegistrationFormWithExistingData()
    },

    emailErrorIsDisplayedToTheUser() {
        registrationPage.checkEmailErrorIsDisplayed()
    }

}
