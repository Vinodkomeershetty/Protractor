var goalSetting_Page = function() {
    title= element(by.css('h1.clp-lead__title'))
    lectures=element(by.css('.num-lectures'))

    this.getTitle = function () {
        return title.getText()
    }
    this.getLectures = function () {
         return lectures.getText();
    }
}
module.exports = goalSetting_Page;