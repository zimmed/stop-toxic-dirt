import * as React from 'react';
import { Router } from '~features/router/components';
import { IRoute } from '~features/router/types';
import { AppState, Context } from '~features/state';

import './App.css';

export interface IProps {
  routes: IRoute[];
}

function App({ routes }: IProps) {
  const state = AppState.create();

  return (
    <div className="App">
      <Context.Provider value={state}>
        <Router routes={routes} />
      </Context.Provider>
    </div>
  );
}

export default App;
