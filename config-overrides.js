/* eslint-disable */
const path = require('path');

function resolve(dir) {
  const __dirname = path.resolve();
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@components': resolve('src/components'),
    '@pages': resolve('src/pages'),
    '@services': resolve('src/services'),
    '@hooks': resolve('src/hooks'),
    // '@apis': resolve('src/apis')
    // '@constants': resolve('src/constants'),
    // '@hooks': resolve('src/hooks'),
  };
  return config;
};
