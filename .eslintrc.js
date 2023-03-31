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
    "react/jsx-indent": [2, 2],
    "indent": [2, 2],
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ["error", "always"],
    "no-undef": "off",
    "react/display-name": "off"
  },
};
