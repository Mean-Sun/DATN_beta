// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    "no-console": "off",
    "no-eval": 1,
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        "ignoreRestSiblings": true
      }
    ],
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "max-len": [
      "warn",
      {
        "code": 120
      }
    ],
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-implicit-globals": "off",
    "no-mixed-operators": "off",
    "no-shadow": "off",
    // "jsx-a11y/anchor-is-valid": [
    //   "error",
    //   {
    //     "components": [
    //       "Link"
    //     ],
    //     "specialLink": [
    //       "to"
    //     ]
    //   }
    // ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/webpack.*.js"
        ]
      }
    ]
  },
}
