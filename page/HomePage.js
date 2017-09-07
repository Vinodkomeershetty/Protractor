var home_Page = function () {
    signupLink = element(by.partialLinkText('Sign Up'));
    loginLink = element(by.css('.sign-link'));
    email = element(by.id('id_email'));
    password = element(by.id('id_password'));
    submitButtton = element(by.id('submit-id-submit'));

    searchBoxes = element.all(by.model('searchPhrase'));
    fastFills = element.all(by.repeater('autocomplete in autocompletes'));

    leveldropdown = element(by.css('[data-purpose="search-filter-btn-instructional_level"]'));
    languagedropdown = element(by.id('label-top-filter-language'));
    featuresdropdown = element(by.id('label-top-filter-features'));
    pricedropdown = element(by.id('label-top-filter-price'))

    optionInLevelDropDown = element(by.css('[data-purpose=\'search-filter-dropdown-instructional_level\'] ul>li:nth-of-type(1) input'))
    optionInLanguageDropDown = element(by.xpath('//span[@class=\'checkbox\']//span[contains(text(),\'English\')]'))
    optionInFeaturesDropDown = element(by.xpath('//span[@class=\'checkbox\']//span[contains(text(),\'Captions\')]'))
    optionInPriceDropDown = element(by.xpath('//span[@class=\'checkbox\']//span[contains(text(),\'Free\')]'))

    searchResults = element(by.css('li[ng-repeat=\'course in courses\']:nth-child(1) [data-purpose=\'search-course-card-title\']'))
    searchlecturesResult = element(by.css('li[ng-repeat=\'course in courses\']:nth-child(1) [data-purpose=\'search-course-card-lecture-info-meta\']>span:nth-child(1)\n'))


    this.loginToAPP = function (userName, passwrd) {
        signupLink.click();
        loginLink.click();
        email.sendKeys(userName);
        password.sendKeys(passwrd);
        submitButtton.click();
    }

    this.search = function (course) {
        searchBoxes.first().sendKeys(course);
    }

    this.clickOnFirstOption = function () {
        fastFills.first().click()
    }
    this.clickOnLevelDropdown = function () {
        leveldropdown.click()
        browser.actions().mouseMove(optionInLevelDropDown).click().perform()
    }
    this.clickOnLanguagedropdown = function () {
        languagedropdown.click()
        browser.actions().mouseMove(optionInLanguageDropDown).click().perform()
    }
    this.clickOnFeaturesdropdown = function () {
        featuresdropdown.click()
        browser.actions().mouseMove(optionInFeaturesDropDown).click().perform()
    }
    this.clickOnPricedropdown = function () {
        pricedropdown.click()
        browser.actions().mouseMove(optionInPriceDropDown).click().perform()
    }
    this.getSuggestedOptions = function () {
        this.allusers =
            fastFills.then(function (array) {
                var results = [];
                var elemLength = array.length
                for (var n = 0; n < elemLength; n++) {
                    array[n].getText().then(function (username) {
                        results.push(username.toLowerCase())
                        console.log("name " + username);
                    })
                }
                return results
            });

    }
    this.verifySearchCriteria = function () {
        this.allusers.then(function (results) {
            expect(results).toContain("leadership".toLowerCase())
        })
    }


    this.getCourseName = function () {
        return searchResults.getText();
    }


    this.getLecturesDetails = function () {
        return searchlecturesResult.getText();
    }

    this.clickOnCourseName = function () {
        searchResults.click()
    }


};
module.exports = home_Page;