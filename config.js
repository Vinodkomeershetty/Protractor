exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',
    specs: ['./specs/SampleSpec.js'],
    baseUrl: 'https://www.udemy.com/',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};