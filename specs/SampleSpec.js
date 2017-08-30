//Suite in Jasmine
var home = require('../page/HomePage')
describe('angularjs homepage todo list', function() {
    // Test in Jasmine
    it('should add a todo', function() {
        browser.get(browser.baseUrl);
        browser.driver.manage().window().maximize();
        home.loginToAPP("Tet123456@gmail.com","Test@123")
        expect(false)
    });
});