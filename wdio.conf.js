exports.config = {
    port: 4723,
    specs: [
        './src/specs/nativeApk.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'AndroidEmulator',
        "appium:app": "C:\\Users\\Yaukhim.Miraniuk\\WebstormProjects\\js_cringe_appium_framework\\src\\apps\\app1.apk"
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
