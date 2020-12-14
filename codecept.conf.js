const {setHeadlessWhen} = require('@codeceptjs/configure');
require('ts-node/register');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: './tests/*_test.ts',
    output: './output',
    helpers: {
        Puppeteer: {
            show: true,
            windowSize: '1200x900',
            chrome: {
                args: [
                    '--disable-web-security',
                ],
            }
        },
        MockRequest: {
            require: '@codeceptjs/mock-request',
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'codecept-example',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}
