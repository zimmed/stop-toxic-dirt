import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';
import { Panel } from '~features/ui/components';

import '~assets/default-page.css';
import './Connect.css';

export interface IProps {
  routes: IRoute[];
}

function Connect({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/connect">
      <div className="Connect default-page">
        <Panel>
          <h4>Coming Soon</h4>
          <p>Site is still under construction...</p>
        </Panel>
      </div>
    </AppPage>
  );
}

export default Connect;
