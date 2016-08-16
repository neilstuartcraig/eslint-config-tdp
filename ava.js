"use strict";

/*
NOTE: These are *only* TDP ESLint AVA rules
*/

module.exports =
{
  "rules":
  {
    "ava/assertion-arguments": "error",
    "ava/assertion-message": ["error", "always"],
    "ava/max-asserts": ["error", 15],
    "ava/no-cb-test": 0,
    "ava/no-identical-title": "error",
    "ava/no-ignored-test-files": "error",
    "ava/no-invalid-end": "error",
    "ava/no-only-test": "error",
    "ava/no-skip-assert": "error",
    "ava/no-skip-test": "error",
    "ava/no-statement-after-end": "error",
    "ava/no-todo-test": "warn",
    "ava/no-unknown-modifiers": "error",
    "ava/prefer-power-assert": "off",
    "ava/test-ended": "error",
    "ava/test-title": ["error", "if-multiple"],
    "ava/use-t-well": "error",
    "ava/use-t": "error",
    "ava/use-test": "error",
    "ava/use-true-false": "error"
  },
  "env":
  {
    "es6": true,
    "node": true,
    "browser": false
  },
  "extends":
  [
    "plugin:ava/recommended"
  ],
  "parserOptions":
  {
    "sourceType": "module",
    "ecmaFeatures":
    {
      "experimentalObjectRestSpread": true
    }
  },
  "plugins":
  [
    "ava"
  ]
};
