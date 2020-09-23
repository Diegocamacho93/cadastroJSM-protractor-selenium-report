var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./properties/prop.properties');

exports.config = {
  getPagetimeout: prop.get('pageTimeOut'),
  allScriptsTimeout: prop.get('scriptTimeout'),
  framework: 'custom',
  restartBrowserBetweenTests: false,
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    shardTestFiles: false,
    browserName: 'chrome',
    chromeOptions: {
      args: ['start-maximized']
    },
    "seleniumProtocol": "WebDriver",
    metadata: {
      device: 'Dell Optiplex 7010',
      platform: {
        name: 'Windows',
        version: '10'
      }
    }
  },

  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      displayDuration: true,
      saveCollectedJSON: true,
      pageFooter: "<div><p>  </p></div>",
      pageTitle: 'Novo Cadastro - Juntos Somos Mais',
      reportName: 'Relatório de execução de teste automção Web',
    }
  }],

  specs: [prop.get('featurePath')],
  ignoreUncaughtExceptions: true,

  cucumberOpts: {
    ignoreUncaughtExceptions: true,
    strict: true,
    'dry-run': false,
    format: 'json:.tmp/novo-cadastro/results.json',
    plugin: 'pretty',
    require: [
      prop.get('stepsPath'),
      'timeout.js'
    ]
  }
};