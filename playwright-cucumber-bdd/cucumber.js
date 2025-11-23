module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'features/step-definitions/**/*.ts',
      'features/support/**/*.ts'
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber/cucumber-report.json',
      'html:reports/cucumber/cucumber-report.html',
      '@cucumber/pretty-formatter'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    parallel: 2
  }
}
