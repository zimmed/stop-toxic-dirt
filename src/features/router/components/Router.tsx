import React from 'react';
import { Router as TRouter } from 'react-router-dom';
// tslint:disable-next-line:no-submodule-imports
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import { IRoute } from '../types';
import Route from './Route';

const history = createHistory();

// Google Analytics
const GOOGLE_UA_ID = process.env.GOOGLE_UA_ID;

if (GOOGLE_UA_ID) {
  ReactGA.initialize(GOOGLE_UA_ID, {
    debug: process.env.NODE_ENV === 'development',
  });

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

export interface IProps {
  routes: IRoute[];
}

function Router({ routes }: IProps) {
  return (
    <TRouter history={history}>
      {routes.map((route) => (
        <Route key={route.path} route={route} routes={routes} />
      ))}
    </TRouter>
  );
}

export default Router;
