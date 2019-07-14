import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';
import { Panel, Image } from '~features/ui/components';
import { SummaryTimeline, Sidebar, Documents, News } from './components';

import '~assets/default-page.css';
import './Info.css';
import 'react-table/react-table.css';

export interface IProps {
  routes: IRoute[];
}

function Info({ routes }: IProps) {
  const colors = ['', 'info', 'success', 'warn', 'error'];
  const [clr, setClr] = React.useState(0);
  const toggle = () => setClr((clr + 1) % colors.length);

  return (
    <AppPage routes={routes} selectedPath="/info">
      <div className="Info default-page">
        <div className="body">
          <h1>Here's The Latest Scoop</h1>
          <Panel highlight="success">
            <h4 className="center">
              <strong>
                Board of Selectmen Unanimously Vote To Appeal Zoning Board of
                Appeals Decision
              </strong>
            </h4>
            <br />
            <p>
              On February 11, 2019, the Pepperell Board of Selectmen unanimously
              voted to appeal the ZBA decision that reversed Zoning Officer
              Robert Kelly's determination that the proposed dirt dump project
              would be classified as a "Commercial Dump".
            </p>
            <p>
              The BOS also voted to send the MassDEP a letter of opposition to
              the proposed dump project.
            </p>
            <p className="center">
              <a
                href="http://vp.telvue.com/preview?id=T02761&video=343967"
                target="_blank"
              >
                Watch the Board of Selectmen's decision to send MassDEP Letter
                of Opposition and to appeal the ZBA decision
              </a>
              <br />
              <span>(Vote starts at time code: 17:00)</span>
            </p>
            <p className="center">
              <a
                href="https://town.pepperell.ma.us/DocumentCenter/View/4393/Appeal-to-Land-Court-of-ZBA-161-Nashua-Rd-Decision"
                target="_blank"
              >
                Read the Board of Selectmen ZBA Appeal to Land Court
              </a>
            </p>
            <p className="center">
              <a
                href="https://town.pepperell.ma.us/DocumentCenter/View/4392/BOS-Letter-to-MassDEP-in-opposition-to-proposal"
                target="_blank"
              >
                Read the Board of Selectmen Letter of Opposition to the MassDEP
              </a>
            </p>
          </Panel>
          <SummaryTimeline />
          <h1>Documents</h1>
          <Documents />
          <h1>News Coverage</h1>
          <Panel highlight="info">
            <h4 className="center">
              <strong>Local Access Cablecasting From Pepperell, MA</strong>
            </h4>
            <br />
            <p>
              All public meetings are recorded and broadcast by Pepperell
              Community Media, Inc.
            </p>
            <p>You can search and watch them by clicking on the link below.</p>
            <p>
              <a
                href="http://www.pepperellchannel.org/VOD.html"
                target="_blank"
              >
                Pepperell Community Media - Video On Demand
              </a>
            </p>
          </Panel>
          <News />
        </div>
        <Sidebar />
      </div>
    </AppPage>
  );
}

export default Info;
