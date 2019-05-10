const process = require('process');
const override = require('./override-webpack');

const checkRequiredFilesPath = 'react-dev-utils/checkRequiredFiles';

require(checkRequiredFilesPath);
require.cache[require.resolve(checkRequiredFilesPath)].exports = () => true;

module.exports = (config) => override(config, process.env.NODE_ENV);
