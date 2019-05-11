import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';

import '~assets/default-page.css';
import './Info.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/info">
      <div className="Info default-page">
        <h1>Info!</h1>
        <p>This is the info page.</p>
      </div>
    </AppPage>
  );
}

export default Home;
