lasso-optimize-js-transform
===========

[Lasso.js](https://github.com/lasso-js/lasso) transform for
[optimize-js](https://github.com/nolanlawson/optimize-js)

## Installation
```bash
npm install lasso-optimize-js-transform --save
```

## Usage

```js
const lassoOptimizeTransform = require('lasso-optimize-js-transform');

const myLasso = lasso.create({
  ...
  require: {
    transforms: [
      lassoOptimizeTransform
    ]
  },
  ...
});

```
