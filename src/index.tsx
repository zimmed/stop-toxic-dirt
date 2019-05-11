import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~features/app/components';
import routes from './routes';

import '~assets/reset.css';
import './index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App routes={routes} />, root);
} else {
  throw new Error(
    'Page does not contain "root" element, so application cannot render.'
  );
}
