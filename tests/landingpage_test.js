Feature('Landingpage');

Scenario('Check landing page sections are loaded', ({landingPageStep}) => {
    landingPageStep.landingpageIsOpen();
    landingPageStep.pageHasCorrectTitle();
    landingPageStep.landingPageContentIsLoaded();
});

Scenario('Check \'page not found\' error page', ({errorPageStep}) => {
    errorPageStep.errorPageIsOpen()
    errorPageStep.userCanReturnToHomepage()
});

