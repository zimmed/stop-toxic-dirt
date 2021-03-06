import React from 'react';
import { Icon } from '~features/ui/components';

import './AppLogo.css';

function AppLogo() {
  return (
    <div className="AppLogo">
      <div className="label">
        <span>No</span>
        <span>Toxic</span>
        <span>Dirt!</span>
      </div>
      <Icon name="ban" color="red" />
    </div>
  );
}

// Type cast needed for styleguidist, since no reference to React is used in the component.
export default AppLogo as React.SFC;
