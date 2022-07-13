const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
    tests: './tests/*_test.js',
    output: './tests/output',
    helpers: {
        WebDriver: {
            url: 'https://www.avon.com',
            browser: 'chrome',
            restart: true,
            windowSize: 'maximize',
            smartWait: 5000,
            waitForTimeout: 1000,
            fullPageScreenshots: false,
            uniqueScreenshotNames: true
        }
    },
    include: {
        // Actors
        I: './steps_file.js',
        // Resources
        testData: './common/testData.js',
        utils: './common/utils.js',
        path: './common/paths.js',
        // Pages
        landingPage: './pages/landingPage.js',
        headerPage: './pages/headerPage.js',
        errorPage: './pages/errorPage.js',
        productPage: './pages/productPage.js',
        findARepPage: './pages/findARepPage.js',
        signInModalPage: './pages/signInModalPage.js',
        searchSideBarPage: './pages/searchSideBarPage.js',
        shoppingBagSideBarPage: './pages/shoppingBagSideBarPage.js',
        registrationPage: './pages/registrationPage.js',
        becomeARepPage: './pages/becomeARepPage.js',
        insiderBlogPage: './pages/insiderBlogPage.js',
        digitalBrochurePage: './pages/digitalBrochurePage.js',
        specialOffersPage: './pages/specialOffersPage.js',
        liveShoppingPage: './pages/liveShoppingPage.js',
        // Steps
        productPageStep: './steps/productPageSteps.js',
        errorPageStep: './steps/errorPageSteps.js',
        headerStep: './steps/headerSteps.js',
        landingPageStep: './steps/landingPageSteps.js',
        loginStep: './steps/loginSteps.js',
        registrationStep: './steps/registrationSteps.js',
        findARepStep: './steps/findARepSteps.js',
        shoppingBagStep: './steps/shoppingBagSteps.js',
        searchBarStep: './steps/searchBarSteps.js',
        insiderBlogStep: './steps/insiderBlogSteps.js',
        digitalBrochureStep: './steps/digitalBrochureSteps.js',
        specialOffersStep: './steps/specialOffersSteps.js',
        liveShoppingStep: './steps/liveShoppingSteps.js',
        becomeRepStep: './steps/becomeARepSteps.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'avon-auto',
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        },
        allure: {
            enabled: true,
            outputDir: './tests/output'
        },
        screenshotOnFail: {
            enabled: false
        }
    }
}
