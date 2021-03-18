module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}