module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    ecmaFeatures: 2020,
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
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],

  },
};
