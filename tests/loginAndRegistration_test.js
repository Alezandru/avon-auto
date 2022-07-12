Feature('Login and Registration feature');

Scenario('Existing users can login', ({ I, landingPageStep, headerStep, loginStep }) => {
    landingPageStep.landingpageIsOpen();


    I.amOnPage('/');

    I.click('Sign In');
    I.fillField('signinId', 'buscan.alexandru@gmail.com')
    I.click('Continue');
    I.fillField('password', 'myPass123!');
    I.click('/html/body/div[9]/div/div[2]/div/form/button')
    I.seeElement('//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[1]/div/div/button/div');
    I.see('Hi, Alex')
});

Scenario('Check new users can\'t register with same email', ({ I, landingPageStep }) => {
    landingPageStep.landingpageIsOpen();


    I.amOnPage('/signup')
    I.fillField('firstName', 'Tester');
    I.fillField('lastName', 'Testersson');
    I.fillField('emailAddr', 'tester.testersson@gmail.com');
    I.fillField('confirmEmailAddr', `tester.testersson@gmail.com`);
    I.fillField('password', 'myPass123!');
    I.fillField('phoneNumber', '9159969739');
    I.checkOption('//span[@class=\'MuiIconButton-label-26\']');
    I.checkOption('//span[@class=\'MuiIconButton-label-87\']');
    I.click('Create Account');
    I.seeElement('//*[@id="root"]/div[2]/div/div/div[2]/div[1]/div[3]/div[2]');
    I.see('The email address you entered already exists. Please Sign In or try again.');
});
