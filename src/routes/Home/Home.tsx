import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';

import '~assets/default-page.css';
import './Home.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/">
      <div className="Home default-page">
        <h1>Hello World!</h1>
      </div>
    </AppPage>
  );
}

export default Home;
