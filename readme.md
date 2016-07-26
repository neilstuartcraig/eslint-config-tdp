# eslint-config-tdp

This is my [ESLint](http://eslint.org/) [shareable config file](http://eslint.org/docs/developer-guide/shareable-configs). You're very welcome to use this and to contribute to it but I'm going to be pretty selfish with any changes/updates as config is a personal thing and I have a slightly odd programming style so what works for me probably isn't great for many/most others - or maybe it is, let me know!

## Using eslint-config-tdp
For general guidance and background, see '[using a shareable config](http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)' on eslint.org. 

The specifics for `eslint-config-tdp` (assuming you've got an NPM project set up already) are:

### 1. Add `eslint-config-tdp` as a dependency for your NPM package

```
npm install --save-dev eslint-config-tdp
```

### 2. Configure your NPM package to use `eslint-config-tdp`

Add the following to your `package.json` file:
```
{
...
  "eslintConfig":
  {
    "extends":
    {
      "tdp/node",
      "tdp/react",
      "tdp/ava"
    }
  }
...  
}
```

If you already have an `eslintConfig` property in your `package.json`, just add the above to it (`eslintConfig` needs to be a root-level property of your `package.json`) - you can also add any custom rules here (in a `rules` property inside `eslintConfig`).

You can remove any of the `tdp/...` rulesets that you don't need e.g., if you're not using `react`, remove `"tdp/react"`.


## Contributing
With the above caveat, contributions are very welcome for fixes, improvements, new features, documentation, bug reports and/or ideas. Please create a Github issue initially so we can discuss and agree actions/approach and whether it's a good fit - that should save time all-round.

The ideal way to receive contributions is via a [Github Pull Request](https://help.github.com/articles/using-pull-requests/) from/to the master branch.

## License
This package, in its entirety is [MIT licensed](./license.md).
