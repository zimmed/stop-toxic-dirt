import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { IRoute } from '~features/router/types';
import { Icon, DivBtn } from '~features/ui/components';
import AppLogo from '../AppLogo';

import './AppNav.css';

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  fixed?: boolean;
  className?: string;
  onZoomIn?: () => any;
  onZoomOut?: () => any;
  disableZoomIn?: boolean;
  disableZoomOut?: boolean;
  zoom?: number;
}

const getRoute = (routes: IRoute[], selectedPath: string): IRoute => {
  const route = routes.find((r) => r.path === selectedPath);

  if (!route) {
    throw new Error('No route found!');
  }
  return route;
};

function AppNav({
  routes,
  selectedPath,
  fixed,
  className,
  onZoomIn,
  onZoomOut,
  disableZoomIn,
  disableZoomOut,
  zoom,
}: IProps) {
  const [curRoute, setRoute] = React.useState(getRoute(routes, selectedPath));
  const [showMenu, setMenu] = React.useState(false);
  const [portrait, setPortrait] = React.useState(
    window.innerHeight > window.innerWidth
  );
  const toggleMenu = () => setMenu(!showMenu);

  React.useEffect(() => setRoute(getRoute(routes, selectedPath)), [
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
    <div className={cx('AppNav', fixed && 'fixed', className)}>
      <div className="logo">
        <AppLogo />
      </div>
      {portrait ? (
        <div className="menu">
          <div className="current">
            {curRoute.icon ? <Icon name={curRoute.icon} /> : null}
            <span>{curRoute.title}</span>
          </div>
          <DivBtn className="menu-toggle" action={toggleMenu}>
            <Icon name="bars" />
          </DivBtn>
          <div className={cx('menu-list', showMenu && 'visible')}>
            {routes.map(({ path, title, icon }) =>
              path !== selectedPath ? (
                <Link key={path} to={path}>
                  <span>
                    {icon ? <Icon name={icon} /> : null}
                    {title}
                  </span>
                </Link>
              ) : (
                <div key={path}>
                  <span>
                    {icon ? <Icon name={icon} /> : null}
                    {title}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="list">
          {routes.map(({ path, title, icon }) =>
            path !== selectedPath ? (
              <Link key={path} to={path}>
                {icon ? <Icon name={icon} /> : null}
                <span>{title}</span>
              </Link>
            ) : (
              <div key={path}>
                {icon ? <Icon name={icon} /> : null}
                <span>{title}</span>
              </div>
            )
          )}
          <div className="fill" />
          {onZoomOut && onZoomIn ? (
            <div className="zoomMenu">
              <DivBtn action={onZoomOut} disabled={disableZoomOut}>
                <Icon name="minus-circle" />
              </DivBtn>
              <DivBtn action={onZoomIn} disabled={disableZoomIn}>
                <Icon name="plus-circle" />
              </DivBtn>
              {zoom ? (
                <span className="zoom">{Math.floor(zoom * 100)}%</span>
              ) : null}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

AppNav.defaultProps = {
  fixed: false,
};

export default AppNav;
