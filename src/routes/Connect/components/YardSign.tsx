import * as React from 'react';
import cx from 'classnames';
import { Panel, Image } from '~features/ui/components';

import signImg from '~assets/NoToxicDirt.png';

function YardSign({}) {
  return (
    <Panel className="YardSign">
      <Image src={signImg} zoom={50} />
      <div className="details">
        <h2 className="center">
          We have <em>No Toxic Dirt</em> lawn signs available!
        </h2>
        <br />
        <p>
          The signs are <strong>$8.00 each</strong>.
        </p>
        <p>
          If you would like a sign, please{' '}
          <a href="mailto:ContactUs@stoptoxicdirt.com?Subject=No%20Toxic%20Dirt%20Sign&body=I%20would%20like%20to%20purchase%20a%20No%20Toxic%20Dirt%20lawn%20sign.">
            email us at ContactUs@StopToxicDirt.com
          </a>
          , and we will make arrangements to get you one (or more if needed).
        </p>
      </div>
    </Panel>
  );
}

export default YardSign;
