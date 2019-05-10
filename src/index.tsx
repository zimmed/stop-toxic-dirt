import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~features/app/components';
import * as routes from './routes';

import '~assets/reset.css';
import './index.css';

const routeList = Object.values(routes);

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App routes={routeList} />, root);
} else {
  throw new Error(
    'Page does not contain "root" element, so application cannot render.'
  );
}
