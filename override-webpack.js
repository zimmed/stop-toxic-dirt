const path = require('path');
const process = require('process');
const npmPackage = require(path.resolve(process.cwd(), 'package.json'));

module.exports = (config = {}, env = 'develop') => ({
  ...config,
  externals: {
    ...(config.externals || {}),
    $env: JSON.stringify(env),
  },
  resolve: {
    ...(config.resolve || {}),
    alias: Object.entries(npmPackage._moduleAliases).reduce(
      (aliases, [key, value]) => ({
        ...aliases,
        [key]: path.resolve(__dirname, value),
      }),
      (config.resolve && config.resolve.alias) || {}
    ),
  },
});
