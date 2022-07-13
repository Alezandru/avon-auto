Feature('Header buttons navigation');

Scenario('Check the app logo redirects the user to homepage', ({ landingPageStep, productPageStep, headerStep}) => {
    landingPageStep.landingpageIsOpen()
    landingPageStep.userNavigatesToProductPage()
    productPageStep.productPageIsLoaded()
    headerStep.userClicksOnLogo()
    landingPageStep.landingpageIsLoaded()
    headerStep.userNavigatesToFindARepresentativePage()
    headerStep.userClicksOnLogo()
    landingPageStep.landingpageIsLoaded()
    landingPageStep.pageHasCorrectTitle()
});

Scenario('Check the header top buttons navigation', ({ landingPageStep, headerStep, findARepStep, loginStep, shoppingBagStep, searchBarStep}) => {
    landingPageStep.landingpageIsOpen()
    // 'Find a Rep' button:
    headerStep.userNavigatesToFindARepresentativePage()
    findARepStep.userChecksPageUrl()
    findARepStep.userChecksPageMetaTitle()
    // 'Sign In' button:
    headerStep.userOpensSignInModal()
    loginStep.checkSignInModalFirstScreen()
    loginStep.userClosesSignInModal()
    loginStep.userChecksModalIsClosed()
    // Shopping bag button:
    headerStep.userOpensShoppingBagSideMenu()
    shoppingBagStep.userCheckShoppingBagSideMenuIsOpen()
    headerStep.userClosesShoppingBagSideMenu()
    // Search button:
    headerStep.userOpensSearchBar()
    searchBarStep.userChecksSearchBarIsOpen()
    headerStep.userClosesSearchBar()
});

Scenario('Check the user can navigate to \'Live Shopping\' page from header menu', ({ landingPageStep, headerStep, liveShoppingStep }) => {
    landingPageStep.landingpageIsOpen()
    headerStep.userClicksLiveShoppingButton()
    liveShoppingStep.userChecksLiveShoppingPageMetaTitle()
    liveShoppingStep.liveShoppingPageContentIsDisplayed()
});

Scenario('Check the user can navigate to \'Become a Rep\' page from header menu', ({ landingPageStep, headerStep, becomeRepStep }) => {
    landingPageStep.landingpageIsOpen()
    headerStep.userClicksBecomeARepButton()
    becomeRepStep.userCheckBecomeRepPageTitle()
    becomeRepStep.userChecksBecomeRepPageContentIsDisplayed()
});

Scenario('Check the user can navigate to \'Insider Blog\' page from header menu', ({ landingPageStep, headerStep, insiderBlogStep }) => {
    landingPageStep.landingpageIsOpen()
    headerStep.userClicksInsiderBlogButton()
    insiderBlogStep.userCheckInsiderBlogPageTitle()
    insiderBlogStep.userChecksPageContentIsDisplayed()
});

// Scenario('Check the user can navigate to \'Shop categories\' from header menu', ({ I, landingPageStep }) => {
//     landingPageStep.landingpageIsOpen()
//     // TODO: 4
//     // 1.0 SHOP
//     // 1.1 Makeup
//     // 1.2 Skin Care
//     // 1.3 Bath & Body
//     // 1.4 Hair Care
//     // 1.5 Oral Care
//     // 1.6 Fragrance
//     // 1.7 Jewelery
//     // 1.8 Fashion
//     // 1.9 Wellness
//     // 1.10 Men
//     // 1.11 Home
//     // 1.12 Shop by product
// });

// Scenario('Check the user can navigate to \'Featured\' pages from header menu', ({ I, landingPageStep }) => {
//     landingPageStep.landingpageIsOpen()
//     // TODO 5
// });

// Scenario('Check the user can navigate to \'Special Offers\' page from header menu', ({ I, landingPageStep }) => {
//     landingPageStep.landingpageIsOpen()
//     // TODO 6
// });

// Scenario('Check the user can navigate to \'Digital Brochure\' page from header menu', ({ I, landingPageStep }) => {
//     landingPageStep.landingpageIsOpen()
//     // TODO 7
// });
