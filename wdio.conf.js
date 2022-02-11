exports.config = {
    port: 4723,
    specs: [
        './src/specs/native-apk.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'AndroidEmulator',
        //INSERT PATH TO YOUR APP BELOW
        "appium:app": "YOUR PATH"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            logPath: './',
        }]
    ],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}],
        'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },
    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
}
