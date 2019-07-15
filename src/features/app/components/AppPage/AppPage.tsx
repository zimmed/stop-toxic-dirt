import * as React from 'react';
import { IRoute } from '~features/router/types';
import AppNav from '../AppNav';
import { CONFIG } from '~features/state/types';
import { useContext } from '~features/state';

import railtrail from '~assets/railtrail.jpg';
import './AppPage.css';

const SCROLL_TOP_THRESHOLD = 1;

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  children: React.ReactNode;
}

function AppPage({ routes, selectedPath, children }: IProps) {
  const state = useContext();
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
  const onZoomIn = () => (state.zoom += CONFIG.zoom.step);
  const onZoomOut = () => (state.zoom -= CONFIG.zoom.step);

  return (
    <div className="AppPage" style={{ fontSize: `${state.zoom}em` }}>
      <div className="bg">
        <img src={railtrail} alt="Nashua River" />
        <div className="screen" />
      </div>
      <div className="content" onScroll={onScroll}>
        <AppNav
          fixed={isScrolled}
          routes={routes}
          selectedPath={selectedPath}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
          disableZoomIn={state.zoom >= CONFIG.zoom.max}
          disableZoomOut={state.zoom <= CONFIG.zoom.min}
          zoom={state.zoom}
        />
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default AppPage;
