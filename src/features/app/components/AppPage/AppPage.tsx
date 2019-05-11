import * as React from 'react';
import { IRoute } from '~features/router/types';
import AppNav from '../AppNav';

import railtrail from '~assets/railtrail.jpg';
import './AppPage.css';

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  children: React.ReactNode;
}

function AppPage({ routes, selectedPath, children }: IProps) {
  return (
    <div className="AppPage">
      <div className="bg">
        <img src={railtrail} alt="Nashua River" />
        <div className="screen" />
      </div>
      <div className="content">
        <AppNav routes={routes} selectedPath={selectedPath} />
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default AppPage;
