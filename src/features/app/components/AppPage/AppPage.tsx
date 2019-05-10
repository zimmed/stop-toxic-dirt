import * as React from 'react';
import { IRoute } from '~features/router/types';
import AppNav from '../AppNav';
import AppHeader from '../AppHeader';

import './AppPage.css';

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  children: React.ReactNode;
  demo?: boolean;
}

function AppPage({ routes, selectedPath, demo, children }: IProps) {
  return (
    <div className="AppPage">
      <AppHeader />
      <AppNav routes={routes} selectedPath={selectedPath} demo={demo} />
      {children}
    </div>
  );
}

export default AppPage;
