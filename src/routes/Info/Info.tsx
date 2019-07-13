import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';
import { Panel, Image } from '~features/ui/components';
import { SummaryTimeline } from './components';

import '~assets/default-page.css';
import './Info.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/info">
      <div className="Info default-page">
        <h1>What You Need To Know</h1>
        <Panel>
          <h4>Coming Soon</h4>
          <p>Site is still under construction...</p>
        </Panel>
        <h1>Here's The Latest Scoop</h1>
        <SummaryTimeline />
        <h1>Links To Helpful Resources</h1>
        <Panel>
          <h4>Coming Soon</h4>
          <p>Site is still under construction...</p>
        </Panel>
        <h1>Other Information</h1>
        <Panel>
          <h4>Coming Soon</h4>
          <p>Site is still under construction...</p>
        </Panel>
      </div>
    </AppPage>
  );
}

export default Home;
