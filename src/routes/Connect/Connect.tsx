import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';

import '~assets/default-page.css';
import './Connect.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/connect">
      <div className="Connect default-page">
        <h1>Connect!</h1>
        <p>This is the connect page.</p>
      </div>
    </AppPage>
  );
}

export default Home;
