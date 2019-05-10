import * as React from 'react';
import { Route as TRoute } from 'react-router-dom';
import { IRoute } from '../types';
import { routePath } from '../helpers';

export interface IProps {
  route: IRoute;
  routes: IRoute[];
}

function Route({
  routes,
  route: { title, path, Component, params = [] },
}: IProps) {
  function Wrapper() {
    return (
      <React.Fragment>
        <Window title={title} />
        <Component routes={routes} />
      </React.Fragment>
    );
  }

  return (
    <TRoute path={routePath(path, params)} exact={true} component={Wrapper} />
  );
}

function Window({ title }: { title: string }) {
  React.useEffect(() => {
    document.title = `Stop Toxic Dirt | ${title}`;
  }, [title]);

  return null;
}

export default Route;
