import { SFC } from 'react';

export type RouteComponent = SFC<{
  routes: IRoute[];
}>;

export interface IRoute {
  path: string;
  params?: string[];
  title: string;
  Component: RouteComponent;
}
