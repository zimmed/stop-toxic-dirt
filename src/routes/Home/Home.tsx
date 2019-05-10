import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';

import railtrail from '~assets/railtrail.jpg';
import '~assets/default-page.css';
import './Home.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/">
      <div className="Home default-page">
        <div className="home-banner">
          <img src={railtrail} alt="Nashua River" />
          <div className="content">
            <h1>Protect The Nashua River.</h1>
            <h1>Stop Toxic Dumping.</h1>
            <div className="div" />
            <h2>
              The proposed dumping sites for the estimated <em>4 million </em>
              cubic yards of "regulated" contaminents in Pepperell are located
              just <em>200 feet </em> from the Nashua river and only 100 feet
              from Pepperell Zone II wells.
            </h2>
          </div>
        </div>
      </div>
    </AppPage>
  );
}

export default Home;
