import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';
import { Link } from 'react-router-dom';
import { Panel, Image, A } from '~features/ui/components';

import railtrail from '~assets/railtrail.jpg';
import '~assets/default-page.css';
import './Home.css';

export interface IProps {
  routes: IRoute[];
}

const orangeRiverImg = {
  src: 'https://images.huffingtonpost.com/2014-07-02-NashuaRanRed-thumb.jpg',
  source: {
    name: 'HuffPost',
    src: 'https://www.huffpost.com/entry/nashua-river-transformed_b_5552680',
  },
  caption: 'The Nashua River in the 1960s',
  zoom: 100,
};

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/">
      <div className="Home default-page">
        <div className="home-banner">
          <img src={railtrail} alt="Nashua River" />
          <div className="content">
            <h1>Protect The Nashua River.</h1>
            <h1>Stop Toxic Dumping.</h1>
            <div className="div" />
            <h2>
              The proposed dumping sites for the estimated <em>4 million </em>
              cubic yards of "regulated" contaminants in Pepperell are located
              just <em>200 feet </em> from the Nashua river and only 100 feet
              from Pepperell Zone II wells.
            </h2>
          </div>
        </div>
        <Panel>
          <div className="article">
            <Image {...orangeRiverImg} />
            <div className="article-content">
              <h2 className="center spaced">We cannot go back to this...</h2>
              <p className="justify spaced">
                In the 1960s the Nashua River was starved of oxygen,
                biologically dead, and one of the ten most polluted rivers in
                the United States. The sludge-filled river, which flows through
                New Hampshire and Massachusetts, was a different color every
                day, depending on what was discharged that day.
              </p>
              <p className="justify spaced">
                In 1969, local residents led by the{' '}
                <A src="https://www.nashuariverwatershed.org/who-we-are/mission-and-history/overview.html">
                  Nashua River Watershed Association
                </A>{' '}
                began the task of cleaning this once-toxic river.{' '}
                <strong>
                  It took over 20 years of cleanup before the river was even
                  safe for swimming.
                </strong>{' '}
                Now, several decades later, the river is clean, clear and full
                of life. But let's not forget this part of our recent history,
                lest we repeat it!
              </p>
              <h4 className="center spaced" style={{ fontSize: '1.4em' }}>
                <strong>
                  <Link to="/info">Get Informed Now</Link>
                </strong>
              </h4>
            </div>
          </div>
        </Panel>
      </div>
    </AppPage>
  );
}

export default Home;
