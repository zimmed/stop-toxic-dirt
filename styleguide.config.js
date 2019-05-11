const path = require('path');
const webpack = require('react-scripts/config/webpack.config');
const override = require('./override-webpack');
const { parse } = require('react-docgen-typescript').withCustomConfig(
  './tsconfig.json'
);

module.exports = {
  require: [
    path.join(__dirname, 'src/assets/reset.css'),
    path.join(__dirname, 'src/index.css'),
  ],
  propsParser: parse,
  exampleMode: 'expand',
  usageMode: 'expand',
  components: [
    'src/features/ui/components/**/[A-Z]*.{js,jsx,ts,tsx}',
    'src/features/app/components/*(AppLogo|AppNav|AppPage)/[A-Z]*.{js,jsx,ts,tsx}',
  ],
  webpackConfig: webpack,
  dangerouslyUpdateWebpackConfig: override,
};
