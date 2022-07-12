Feature('Landingpage');

// Scenario('Check landing page sections are loaded', ({I, landingPage, landingPageStep}) => {
//     landingPageStep.landingpageIsOpen();
//     landingPageStep.pageHasCorrectTitle();
//     landingPageStep.contentIsLoaded();
// });

Scenario('Check \'page not found\' error page', ({I, landingPageStep, errorPageStep, landingPage}) => {
    errorPageStep.errorPageIsOpen()
    errorPageStep.userReturnsToHomepage()
    // landingPageStep.landingPage.isLoaded()
});
    
