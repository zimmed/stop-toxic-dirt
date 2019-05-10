import * as React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { IRoute } from '~features/router/types';
import { Icon, DivBtn } from '~features/ui/components';
import AppLogo from '../AppLogo';

import './AppNav.css';

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
}

const getTitle = (routes: IRoute[], selectedPath: string): string => {
  const route = routes.find((r) => r.path === selectedPath);

  return route ? route.title : 'Unknown';
};

function AppHeader({ routes, selectedPath }: IProps) {
  const [curTitle, setTitle] = React.useState(getTitle(routes, selectedPath));
  const [showMenu, setMenu] = React.useState(false);
  const [portrait, setPortrait] = React.useState(
    window.innerHeight > window.innerWidth
  );
  const toggleMenu = () => setMenu(!showMenu);

  React.useEffect(() => setTitle(getTitle(routes, selectedPath)), [
    routes,
    selectedPath,
  ]);
  React.useEffect(() => {
    const onChange = () => {
      setPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', onChange);
    return () => window.removeEventListener('resize', onChange);
  }, []);

  return (
    <div className="AppNav">
      <div className="logo">
        <AppLogo />
      </div>
      {portrait ? (
        <div className="menu">
          <div className="current">
            <span>{curTitle}</span>
          </div>
          <DivBtn className="menu-toggle" action={toggleMenu}>
            <Icon name="bars" />
          </DivBtn>
          <div className={classnames('menu-list', showMenu && 'visible')}>
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
        </div>
      ) : (
        <div className="list">
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
      )}
    </div>
  );
}

export default AppHeader;
