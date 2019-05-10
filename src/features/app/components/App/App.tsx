import React from 'react';
import { Router } from '~features/router/components';
import { IRoute } from '~features/router/types';

import './App.css';

export interface IProps {
  routes: IRoute[];
}

function App({ routes }: IProps) {
  return (
    <div className="App">
      <Router routes={routes} />
    </div>
  );
}

export default App;
