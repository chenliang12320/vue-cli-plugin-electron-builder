const path = require('path')

module.exports = [
  {
    name: 'electronBuilder.electronVersion',
    type: 'list',
    message: 'Choose Electron Version',
    default: '^3.0.0',
    choices: [
      {
        name: '^2.0.0',
        value: '^2.0.0',
        short: '^2.0.0'
      },
      {
        name: '^3.0.0',
        value: '^3.0.0',
        short: '^3.0.0'
      },
      {
        name: '^4.0.0 (may have small issues)',
        value: '^4.0.0',
        short: '^4.0.0'
      }
    ],
    when: () => {
      try {
        // Attempt to read package.json
        const pkg = require(path.join(process.cwd(), 'package.json'))
        // Don't show if electron version is already set
        return !pkg.devDependencies.electron
      } catch (e) {
        console.log('Unable to read package.json')
        return true
      }
    }
  },
  {
    name: 'electronBuilder.addTests',
    type: 'confirm',
    message: 'Add tests with Spectron to your project?',
    when: () => {
      try {
        // Attempt to read package.json
        const pkg = require(path.join(process.cwd(), 'package.json'))
        // Don't show if electron version is already set
        return (
          pkg.devDependencies['@vue/cli-plugin-unit-jest'] ||
          pkg.devDependencies['@vue/cli-plugin-unit-mocha']
        )
      } catch (e) {
        console.log('Unable to read package.json')
        return false
      }
    }
  }
]
