const {RuleTester} = require('eslint')
const rule = require('./no-console-2')

const ruleTester = new RuleTester()
ruleTester.run('no-console', rule, {
  valid: ['foo.console()', 'console()', 'info()', 'console.baz()'],
  invalid: [
    invalid('console.log()'),
    invalid('console.info()'),
    invalid('console.warn()'),
  ],
})

function invalid(code) {
  return {
    code,
    errors: [{message: 'Using console is not allowed'}],
  }
}