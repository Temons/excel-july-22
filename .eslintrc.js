module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "google"],
  plugins: ["jest"],
  rules: {
    "semi": "off",
    "linebreak-style": "off",
    "comma-dangle": "off",
    "quotes": 0,
    "require-jsdoc": "off",
    "operator-linebreak": "off",
    "indent": [2, 2],
    "object-curly-spacing": ["error", "always"],
    "no-undef": "off",
    "max-len": ["error", { "code": 100 }]
  },
};
