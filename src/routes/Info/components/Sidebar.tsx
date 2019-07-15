import * as React from 'react';
import YT from 'react-youtube';
import { Panel, Image, A } from '~features/ui/components';
import { infoLinks } from '~data';

const dumpImg = {
  src:
    'https://upload.wikimedia.org/wikipedia/commons/1/17/LKW_Kipper_DSCF6469_%28crop%29.jpg',
  source: {
    name: 'WikiMedia',
    src:
      'https://commons.wikimedia.org/wiki/File:LKW_Kipper_DSCF6469_(crop).jpg',
  },
  caption: 'Every 6-8 minutes on Rt. 111',
  zoom: 30,
};

function Sidebar() {
  return (
    <div className="Sidebar">
      <Panel highlight="info">
        <h4 className="center">
          <strong>What You Need To Know</strong>
        </h4>
        <label>
          Proposed Project dumps an estimated 4 million cubic yards of
          "regulated" contaminants.
        </label>
        <h4>Site Location</h4>
        <ul>
          <li>Adjacent to Pepperell Skydiving</li>
          <li>200 feet from Nashua River</li>
          <li>100 feet from Pepperell Zone II wells</li>
        </ul>
        <h4>Project Duration</h4>
        <ul>
          <li>Continuous dumping in Pepperell for 7 - 9 years</li>
        </ul>
        <h4>Project Source</h4>
        <ul>
          <li>
            Est. 160,000 18-wheel truckloads of contruction waste from Boston
            and three New England states
          </li>
        </ul>
        <h4>Traffic/Safety Impact</h4>
        <ul>
          <li>
            Between 8 and 10 large dump trucks <strong>per hour</strong> through
            Dunstable, Tyngsboro, Pepperell, Hollis, and Nashua
          </li>
        </ul>
        <h4>Topography Impact</h4>
        <ul>
          <li>Proposed height of project fill is over 350 feet</li>
          <li>Original height was approx. 210 feet.</li>
          <li>
            <strong>
              Proposed height is nearly twice as high as the so-called
              "reclamation" point.
            </strong>
          </li>
        </ul>
        <h4>Overall Impact</h4>
        <ul>
          <li>
            Residents of all towns along the Nashua river will be affected,
            especially those upstream from the dumping sites (again{' '}
            <strong>just 200 feet</strong> from the river), such as Hollis and
            Nashua residents.
          </li>
          <li>
            Pepperell residents, especially, will <em>enjoy</em> an increase in
            air and noise pollution, well pollution, and a decrease in road
            quality and traffic safety.
          </li>
          <li>
            Pepperell Tax-payers will not only be funding greater upkeep to the
            impact of a constant parade of dump trucks on the roads, but will
            also be funding a full-time, specialized Licensed Site Professional
            (LSP) and environmental Special Counsel.
          </li>
        </ul>
      </Panel>
      <Panel>
        <h4 className="center">
          <strong>Additional Resources</strong>
        </h4>
        {infoLinks.map(({ category, links }, j) => (
          <React.Fragment key={j}>
            <h4>{category}</h4>
            <ul>
              {links.map(({ name, url }, i) => (
                <li key={i}>
                  <A src={url}>{name}</A>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </Panel>
      <Panel highlight="error">
        <h4 className="center">
          <strong>160,000 Dump Trailers</strong>
        </h4>
        <p>
          160,000 possible trailer truckloads is based on TERRA Environmental,
          LLC's estimate of 25 cubic yards in each truckload with a maximum of 4
          million cubic yards of dirt being dumped. (Source: Pepperell Board of
          Selectman meeting 20 Aug 2018)
        </p>
        <br />
        <YT videoId="2fb42PMF9r8" opts={{ width: '100%', height: '360' }} />

        <p>
          For reference, a{' '}
          <A src="https://www.google.com/search?q=3+axle+dump+truck">
            3-axle dump truck
          </A>{' '}
          can hold a <strong>maximum of 22 cubic yards of soil</strong>, or 16.5
          cubic yards of gravel. This means, either the amount per truck is
          greatly over-estimated, resulting in{' '}
          <strong>25-50% more trucks per hour</strong>, or the trucks we'll be
          seeing will look a lot more like the 18-wheeler in the picture below.
        </p>
        <br />
        <Image {...dumpImg} />

        <label>More Info</label>
        <ul>
          <li>
            <A src="https://www.coopskw.com/learn-much-dirt-can-carry-kenworth-dump-trucks/">
              Dump Truck Capacity
            </A>
          </li>
          <li>
            <A src="https://www.todayshomeowner.com/buying-materials-by-the-cubic-yard-faq/">
              Cubic Yard FAQ
            </A>
          </li>
          <li>
            <A src="https://en.wikipedia.org/wiki/Dump_truck">Wikipedia</A>
          </li>
        </ul>
      </Panel>
    </div>
  );
}

export default Sidebar;
