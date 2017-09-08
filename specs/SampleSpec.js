//Suite in Jasmine
var HomePage = require('../page/HomePage')
var GoalSettingPage = require('../page/GoalSettingPage')
describe('angularjs homepage todo list', function () {
    // Test in Jasmine
    var homePage = new HomePage();
    var goalSettingPage = new GoalSettingPage()
    var coursename = "";
    var lectureCount = "";

    it('loginto Udemy site', function () {
        browser.get(browser.baseUrl);
        browser.driver.manage().window().maximize();
        homePage.loginToAPP("Tet123456@gmail.com", "Test@123")
    });

    it('Search for a course', function () {
        browser.get(browser.baseUrl);
        browser.driver.manage().window().maximize();
        homePage.search("leadership");
        homePage.getSuggestedOptions();
        homePage.allusers.then(function (results) {
            expect(results).toContain("leadership".toLowerCase())
        })
        homePage.clickOnFirstOption();
        homePage.clickOnLanguagedropdown();
        homePage.clickOnPricedropdown();
        homePage.clickOnFeaturesdropdown();
        homePage.clickOnLevelDropdown();
        coursename = homePage.getCourseName();
        lectureCount = homePage.getLecturesDetails()
        //expect(coursename).toEqual("Achieve More in Less Time Using SMART Goals")
        homePage.clickOnCourseName();
        expect(goalSettingPage.getTitle()).toEqual(coursename)

    });


});