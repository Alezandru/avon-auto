const { I, landingPage, testData } = inject();

module.exports = {
  landingpageIsOpen(){
    landingPage.isOpened();
    landingPage.isLoaded();
  },

  pageHasCorrectTitle() {
    landingPage.hasCorrectTitle();
  },

  contentIsLoaded() {
    landingPage.hasLoadedSections()
  }



}
