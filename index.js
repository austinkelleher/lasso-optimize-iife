'use strict';

const optimize = require('optimize-js');

module.exports = {
  id: __filename,
  contentType: 'js',
  stream: false,

  createTransform(transformConfig) {
    let optimizeOptions = transformConfig.optimize;
    return (code, lassoContext) => optimize(code, optimizeOptions);
  }
};
