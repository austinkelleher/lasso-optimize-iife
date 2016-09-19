'use strict';

const optimize = require('optimize-js');

module.exports = function(lasso, pluginConfig) {
  lasso.addTransform({
    contentType: 'js',
    name: module.id,
    stream: false,

    transform(code, lassoContext) {
      return optimize(code, pluginConfig);
    }
  });
};
