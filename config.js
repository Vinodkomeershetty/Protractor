exports.config = {

    //SeleniumAddress field points for selenium-server address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //This option is used to directly connect to web driver server
    // directConnect: true,

    //Specifies the environment that you want to run in
    capabilities: {
        'browserName': 'chrome'
    },

    //Specs field tells protractor where are your tests.
        specs: ['examplespec.js'],

    jasmineNodeOpts: {

        // If true  print colors to the terminal.
        showColors: true,
        // defaultTimeoutInterval: 2500000
    }
};