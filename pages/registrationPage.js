const { I, path, testData } = inject();

module.exports = {

    firstName: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[1]/div/div/input',
    lastName: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[2]/div/div[2]/div/div/input',
    emailAddress: '//*[@id="emailAddr"]',
    reEmailAddress: '//*[@id="confirmEmailAddr"]',
    password: '//*[@id="password"]',
    phoneNr: '//*[@id="phoneNumber"]',
    receiveEmailsCheckbox: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[6]/div[1]/label/label/span[1]/span/input',
    termsAndConditionsCheckbox: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[6]/div[2]/label/label/span[1]/span/input',
    createAccountButton: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[7]/button',
    emailFieldError: '//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[3]/div[2]',

    isOpen() {
        I.amOnPage(path.registration)
    },

    fillRegistrationFormWithExistingData() {
        I.seeElement(this.firstName)
        I.fillField(this.firstName, testData.newFirstName)
        I.fillField(this.lastName, testData.newLastName)
        I.fillField(this.emailAddress, testData.newEmailAddress)
        I.fillField(this.reEmailAddress, testData.newEmailAddress)
        I.fillField(this.password, testData.password)
        I.fillField(this.phoneNr, testData.phoneNumberUsa)
        I.checkOption(this.receiveEmailsCheckbox)
        I.checkOption(this.termsAndConditionsCheckbox)
        I.click(this.createAccountButton)
    },

    checkEmailErrorIsDisplayed() {
        I.seeElement(this.emailFieldError)
        I.see(testData.usedEmailErrorMessage)
    }


}
