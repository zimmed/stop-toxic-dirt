import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';

import '~assets/default-page.css';
import './About.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/about">
      <div className="About default-page">
        <h1>About!</h1>
        <p>This is the about page.</p>
      </div>
    </AppPage>
  );
}

export default Home;
