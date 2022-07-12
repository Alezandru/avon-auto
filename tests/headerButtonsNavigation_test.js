Feature('Header buttons navigation');

// Scenario('Check the app logo redirects the user to homepage', ({ I }) => {
//     I.amOnPage('/');
//     I.seeElement("//*[@id=\"root\"]/header/div[2]/div[1]/span");
//     // Navigate to product page    
//     I.click('Shop Now');
//     I.seeElement('//*[@id="root"]/div[2]/div/div[1]/div[1]/div/div[1]/div[2]/div[1]/h1');
//     // Check Logo returns user to homepage
//     I.click("//*[@id=\"root\"]/header/div[2]/div[1]/span");
//     I.seeElement("//*[@id=\"root\"]/div[2]/div/div/div[3]/div/div/strong");
//     // Navigate to 'Find a Rep' page
//     I.click('Find a Rep');
//     I.seeElement('//*[@id="root"]/div[2]/div/div/div[1]/h1');
//     I.seeInTitle('Find A Representative');
//     // Check Logo returns user to homepage
//     I.click("//*[@id=\"root\"]/header/div[2]/div[1]/span");
//     I.seeElement("//*[@id=\"root\"]/div[2]/div/div/div[3]/div/div/strong");
//     I.seeTitleEquals('AVON');
// });

// Scenario('Check the header top buttons navigation', ({ I }) => {
//     I.amOnPage('/');
//     // 'Find a Rep' button:
//     I.click('Find a Rep');
//     I.seeElement('//*[@id="root"]/div[2]/div/div/div[1]/h1');
//     I.seeCurrentUrlEquals('/findarep');
//     I.seeTitleEquals('Find A Representative by AVON');
//     // 'Sign In' button:
//     I.click('Sign In');
//     I.seeElement('/html/body/div[9]/div/div[2]/div/form/div[1]/div[2]/div/div/div/input');
//     I.see('Enter your email address\nor account number');
//     I.click('/html/body/div[9]/div/div[1]/button');
//     I.dontSee('Enter your email address or account number');
//     // Shopping bag button:
//     I.click('//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[1]/button');
//     I.seeElement('/html/body/div[9]/div[3]/div/div/div/div[1]/div[1]');
//     I.see('Your Bag');
//     I.click('/html/body/div[9]/div[3]/button')
//     I.waitToHide('/html/body/div[9]/div[3]/div/div/div/div[1]/div[1]');
//     I.dontSee('Your Bag');
//     // Search button:
//     I.click('//*[@id="root"]/header/div[2]/div[2]/ul[2]/li[2]/button');
//     I.seeElement('/html/body/div[9]/div[3]/div/div/div/div[1]/div[1]');
//     I.see('Please enter a search term.');
//     I.click('/html/body/div[9]/div[3]/button');
//     I.waitToHide('/html/body/div[9]/div[3]/div/div/div/div[1]/div[1]');
//     I.dontSee('Please enter a search term.');
// });

Scenario('Check the user can navigate to \'Shop categories\' from header menu', ({ I }) => {
    I.amOnPage('/');
    pause();
    
    // TODO: 4
    // 1.0 SHOP
    // I.click('//*[@id="root"]/header/div[3]/div/div[1]/div[1]/div')

    // 1.1 Makeup
    // 1.2 Skin Care
    // 1.3 Bath & Body
    // 1.4 Hair Care
    // 1.5 Oral Care
    // 1.6 Fragrance
    // 1.7 Jewlery
    // 1.8 Fashion
    // 1.9 Wellness
    // 1.10 Men
    // 1.11 Home

    // 1.12 Shop by product
    I.click('//*[@id="root"]/header/div[3]/div/div/div[1]/div[2]/div/div/div/div[2]')
});

// Scenario('Check the user can navigate to \'Featured\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     pause();
//     // TODO 5

// });

// Scenario('Check the user can navigate to \'Live Shopping\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     I.click('LIVE SHOPPING');

//     I.seeElement('//*[@id="ls"]');
//     I.seeElement('//*[@id="root"]/div[2]/div/div/div/div/div[4]/div[1]/a/img');
//     I.seeElement('//*[@id="root"]/div[2]/div/div/div/div/div[5]/div/h5[1]');
//     I.seeInCurrentUrl('/live-shopping');
//     I.seeTitleEquals('Live Shopping - An online experience to watch from any device. Shop Live');
//     I.see('LIGHTS, CAMERA, ACTION!');
//     I.seeElement('//*[@id="carousel"]');
// });

// Scenario('Check the user can navigate to \'Special Offers\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     // TODO 6


// });

// Scenario('Check the user can navigate to \'Digital Brochure\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     pause();
//     // TODO 7   

// });

// Scenario('Check the user can navigate to \'Become a Rep\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     I.click('BECOME A REP');

//     I.seeElement('//*[@id="root"]/div[2]/div/div/div/div/div[4]/h5');
//     I.seeInCurrentUrl('/becomearep');
//     I.seeTitleEquals('Avon | Make Beauty Your Business | Sell Avon | Free welcome gift with your first order + $10 Credit');
//     I.see('Get Paid to Shop and Share Beauty!', 'h5');
//     I.see('Think Big, Earn Big', 'h5');
//     I.seeElement('//*[@id="root"]/div[2]/div/div/div/div/div[9]/div[1]/a/button');
// });

// Scenario('Check the user can navigate to \'Insider Blog\' page from header menu', ({ I }) => {
//     I.amOnPage('/');
//     I.click('INSIDER BLOG');

//     I.waitForElement('//*[@id="root"]/div[2]/div/div[1]/div[1]/h1/a');
//     I.seeInCurrentUrl('/blog');
//     I.seeTitleEquals('Avon Insider Beauty Blog - Stories, Makeup Tutorials, Inspiration');
//     I.see('Insider Blog', 'h1');
//     I.seeElement('//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[1]/span');
//     I.seeElement('//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[2]/span');
//     I.seeElement('//*[@id="root"]/div[2]/div/div[1]/div[2]/div/a[3]/span');
// });