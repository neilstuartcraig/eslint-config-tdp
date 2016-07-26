"use strict";

/*
NOTE: These are *only* TDP ESLint React rules
*/

module.exports =
{
  "rules":
  {
  },
  "env":
  {
    "es6": true,
    "node": true,
    "browser": false
  },
  "extends":
  [
    "plugin:react/recommended"
  ],
  "parserOptions":
  {
    "sourceType": "module"
    "ecmaFeatures":
    {
      "jsx": true
    }
  },
  "plugins":
  [
    "react"
  ]
};
