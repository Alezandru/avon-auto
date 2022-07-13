Feature('Login and Registration feature');

Scenario('Existing users can login', ({ landingPageStep, headerStep, loginStep }) => {
    landingPageStep.landingpageIsOpen()
    loginStep.userLogsIn()
    headerStep.userChecksHeIsLoggedIn()
});

Scenario('Check new users can\'t register with same email', ({ registrationStep }) => {
    registrationStep.userIsOnRegistrationPage()
    registrationStep.userFillsRegistrationFormWithExistingAccountEmail()
    registrationStep.emailErrorIsDisplayedToTheUser()
});
