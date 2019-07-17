import * as React from 'react';
import { Panel, Image, A } from '~features/ui/components';

import signImg from '~assets/NoToxicDirt.png';

function YardSign() {
  return (
    <Panel className="YardSign">
      <Image className="sign-image" src={signImg} zoom={50} />
      <div className="details">
        <h2 className="center">
          We have <em style={{ color: '#8b0000' }}>No Toxic Dirt</em> lawn signs
          available!
        </h2>
        <br />
        <p className="justify">
          The signs are <strong>$8.00 each</strong>.
        </p>
        <p className="justify">
          If you would like a sign, please email us at{' '}
          <A
            sameTab={true}
            src="mailto:ContactUs@stoptoxicdirt.com?Subject=No%20Toxic%20Dirt%20Sign&body=I%20would%20like%20to%20purchase%20a%20No%20Toxic%20Dirt%20lawn%20sign."
          >
            ContactUs@StopToxicDirt.com
          </A>{' '}
          and we will make arrangements to get you one (or more if needed).
        </p>
      </div>
    </Panel>
  );
}

export default YardSign;
