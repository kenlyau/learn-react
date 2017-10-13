module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "standard",
  "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "globals": {
      "test": false,
      "describe": false,
      "expect": false
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "no-useless-constructor": 0,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1
    }
};