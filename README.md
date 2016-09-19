lasso-optimize-iife
===========

[Lasso.js](https://github.com/lasso-js/lasso) transform for
[optimize-js](https://github.com/nolanlawson/optimize-js)

> Optimize a JavaScript file for faster execution, by wrapping all
> immediately-invoked functions or likely-to-be-invoked functions in parentheses.

## Installation
```bash
npm install lasso-optimize-iife --save
```

## Usage

```js
const lassoOptimizeIife = require('lasso-optimize-iife');

require('lasso').configure({
    ...
    plugins: [
        lassoOptimizeIife,
        ...
    ]
});

```
