const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

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
      smartWait: 5000,
      waitForTimeout: 1000,
      fullPageScreenshots: false,
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    testData: './common/testData.js',
    landingPage: './pages/landingPage.js',
    headerPage: './pages/headerPage.js',
    errorPage: './pages/errorPage.js',
    errorPageStep: './steps/errorPageSteps.js',
    headerStep: './steps/headerSteps.js',
    landingPageStep: './steps/landingPageSteps.js',
    loginStep: './steps/loginSteps.js',
    registrationStep: './steps/registrationSteps.js'
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
      outputDir: './tests/reports'
    },
    screenshotOnFail: {
      enabled: false
    }
  }
}