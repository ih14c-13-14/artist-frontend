/* eslint-disable no-undef */
module.exports = {
  plugins: ['stylelint-scss', 'stylelint-declaration-strict-value'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      { message: 'Expected class to be lowerCamelCase' },
    ],
    'scss/dollar-variable-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      { message: 'Expected variable to be lowerCamelCase' },
    ],
    'scss/at-import-no-partial-leading-underscore': null,
    'declaration-block-trailing-semicolon': 'always',
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'fill', 'stroke', 'z-index', 'font-size', 'font-weight'],
      {
        expandShorthand: true,
        ignoreValues: {
          '': ['currentColor', 'transparent', 'inherit', 'unset'],
        },
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  },
};
