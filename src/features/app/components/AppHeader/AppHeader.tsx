import React from 'react';

import banner from '~assets/banner.jpg';
import './AppHeader.css';

function AppHeader() {
  return (
    <div className="AppHeader" style={{ backgroundImage: `url(${banner})` }}>
      &nbsp;
    </div>
  );
}

export default AppHeader;
