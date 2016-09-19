lasso-optimize-iife
===========

[Lasso.js](https://github.com/lasso-js/lasso) transform for
[optimize-js](https://github.com/nolanlawson/optimize-js)

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
