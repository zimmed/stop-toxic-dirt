import * as React from 'react';
import { Router } from '~features/router/components';
import { IRoute } from '~features/router/types';
import { AppState, Context, CONFIG } from '~features/state';

import './App.css';

export interface IProps {
  routes: IRoute[];
}

function App({ routes }: IProps) {
  const state = AppState.create();

  function onWindowChange() {
    state.isPortrait = CONFIG.isPortrait.check(window);
  }

  React.useEffect(() => {
    onWindowChange();
    window.addEventListener('resize', onWindowChange);
    window.addEventListener('orientationchange', onWindowChange);
    return () => {
      window.removeEventListener('orientationchange', onWindowChange);
      window.removeEventListener('resize', onWindowChange);
    };
  }, []);

  return (
    <div className="App">
      <Context.Provider value={state}>
        <Router routes={routes} />
      </Context.Provider>
    </div>
  );
}

export default App;
