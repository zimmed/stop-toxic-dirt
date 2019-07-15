import * as React from 'react';
import { IRoute } from '~features/router/types';
import AppNav from '../AppNav';

import railtrail from '~assets/railtrail.jpg';
import './AppPage.css';

const SCROLL_TOP_THRESHOLD = 1;
const MAX_ZOOM = 3.0;
const MIN_ZOOM = 0.5;
const ZOOM_STEP = 0.25;

export interface IProps {
  routes: IRoute[];
  selectedPath: string;
  children: React.ReactNode;
}

function AppPage({ routes, selectedPath, children }: IProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [zoom, setZoom] = React.useState(1.0);
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
  const onZoomIn = () => setZoom(Math.min(MAX_ZOOM, zoom + ZOOM_STEP));
  const onZoomOut = () => setZoom(Math.max(MIN_ZOOM, zoom - ZOOM_STEP));

  return (
    <div className="AppPage" style={{ fontSize: `${zoom}em` }}>
      <div className="bg">
        <img src={railtrail} alt="Nashua River" />
        <div className="screen" />
      </div>
      <div className="content" onScroll={onScroll}>
        <AppNav
          fixed={isScrolled}
          routes={routes}
          selectedPath={selectedPath}
          // onZoomIn={onZoomIn}
          // onZoomOut={onZoomOut}
          // disableZoomIn={zoom >= MAX_ZOOM}
          // disableZoomOut={zoom <= MIN_ZOOM}
          // zoom={zoom}
        />
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default AppPage;
