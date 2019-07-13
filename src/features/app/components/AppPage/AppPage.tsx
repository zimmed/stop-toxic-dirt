import * as React from 'react';
import { IRoute } from '~features/router/types';
import AppNav from '../AppNav';

import railtrail from '~assets/railtrail.jpg';
import './AppPage.css';

const SCROLL_TOP_THRESHOLD = 1;

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  children: React.ReactNode;
}

function AppPage({ routes, selectedPath, children }: IProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const onScroll = (e: React.UIEvent) => {
    if (isScrolled && e.currentTarget.scrollTop < SCROLL_TOP_THRESHOLD) {
      setIsScrolled(false);
    } else if (
      !isScrolled &&
      e.currentTarget.scrollTop > SCROLL_TOP_THRESHOLD
    ) {
      setIsScrolled(true);
    }
  };

  return (
    <div className="AppPage">
      <div className="bg">
        <img src={railtrail} alt="Nashua River" />
        <div className="screen" />
      </div>
      <div className="content" onScroll={onScroll}>
        <AppNav
          fixed={isScrolled}
          routes={routes}
          selectedPath={selectedPath}
        />
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default AppPage;
