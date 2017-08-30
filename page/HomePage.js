var home_Page = {
    loginToAPP: function (userName, password) {
        element(by.partialLinkText('Sign Up')).click();
        element(by.css('.sign-link')).click();
        element(by.id('id_email')).sendKeys(userName);
        element(by.id('id_password')).sendKeys(password);
        element(by.id('submit-id-submit')).click();
    }
    
};
module.exports = home_Page;