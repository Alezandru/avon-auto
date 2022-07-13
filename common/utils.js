const {I} = inject();

module.exports = {

    scrollDownABit(){
        I.pressKey('PageDown')
    },

    scrollUpABit(){
        I.pressKey('PageUp')
    }


}
