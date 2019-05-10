import React from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '~features/router/types';

import './AppNav.css';

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  demo?: boolean;
}

function AppHeader({ routes, selectedPath, demo }: IProps) {
  return demo ? (
    <div className="AppNav">
      {routes.map(({ path, title }) =>
        path !== selectedPath ? (
          <a key={path} href={path}>
            <span>{title}</span>
          </a>
        ) : (
          <div key={path}>
            <span>{title}</span>
          </div>
        )
      )}
    </div>
  ) : (
    <div className="AppNav">
      {routes.map(({ path, title }) =>
        path !== selectedPath ? (
          <Link key={path} to={path}>
            <span>{title}</span>
          </Link>
        ) : (
          <div key={path}>
            <span>{title}</span>
          </div>
        )
      )}
    </div>
  );
}

export default AppHeader;
