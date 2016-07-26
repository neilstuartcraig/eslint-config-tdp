"use strict";

module.exports =
{
  "rules":
  {
    "no-console": 0,
    "space-infix-ops": 2,
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "no-unused-vars": [2, { "args": "all", "vars": "all"}],
    "complexity": [2, 8],
    "no-else-return": 2,
    "no-empty": 2,
    "no-cond-assign": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-unreachable": 2,
    "valid-typeof": 2,
    "consistent-return": 2,
    "curly": 2,
    "no-extra-bind": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-native-reassign": 2,
    "no-param-reassign": 2,
    "no-return-assign": 2,
    "no-warning-comments": 1,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "no-use-before-define": 2,
    "no-shadow": 2,
    "no-path-concat": 2,
    "func-names": 2,
    "no-lonely-if": 2,
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "quotes": [2, "double"],
    "ava/assertion-arguments": "error",
    "ava/assertion-message": ["error", "always"],
    "ava/max-asserts": ["error", 10],
    "ava/no-cb-test": 2,
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
    "eslint:recommended",
    "plugin:ava/recommended"
  ],
  "parserOptions":
  {
    "sourceType": "module"
  },
  "ecmaFeatures":
  {
    "experimentalObjectRestSpread": true
  },
  "plugins":
  [
    "ava"
  ]
};
