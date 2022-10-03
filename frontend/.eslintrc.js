module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-eval': 1,
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-implicit-globals': 'off',
    'no-mixed-operators': 'off',
    'no-shadow': 'off',
    'default-param-last': ['off'],
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
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/webpack.*.js',
        ],
      },
    ],
    'import/extensions': [
      'off',
      'always',
      // {
      //   js: 'never',
      //   ts: 'never',
      // },
    ],
    'import/no-unresolved': ['off'],
  },
};
