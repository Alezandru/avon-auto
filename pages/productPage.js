const { I } = inject();

module.exports = {
    productDescription: '//*[@id="root"]/div[2]/div/div[1]/div[1]/div/div[1]/div[2]/div[1]/h1',

    isLoaded() {
        I.seeElement(this.productDescription)
    }

}
