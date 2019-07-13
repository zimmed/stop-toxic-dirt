import React from 'react';
import { AppPage } from '~features/app/components';
import { IRoute } from '~features/router/types';
import { Panel } from '~features/ui/components';

import '~assets/default-page.css';
import './About.css';

export interface IProps {
  routes: IRoute[];
}

function Home({ routes }: IProps) {
  return (
    <AppPage routes={routes} selectedPath="/about">
      <div className="About default-page">
        <Panel>
          <h4>Coming Soon</h4>
          <p>Site is still under construction...</p>
        </Panel>
        <Panel>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h4 className="center">Centered Heading 4</h4>
          <p>Paragraph.</p>
          <p>
            Paragraph with <a href="#">anchor tag</a>, <em>emphasized text</em>,
            and <strong>strong text</strong>.
          </p>
          <label>Label</label>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>
              List item 3 <a href="#">anchor tag</a>
            </li>
          </ul>
          <p className="small">Small text.</p>
          <p className="right">Right-aligned text.</p>
          <p className="indent">Indented text.</p>
        </Panel>
        <Panel>
          <p>
            Phasellus sollicitudin, lacus in tincidunt lacinia, nibh augue
            efficitur est, vitae blandit odio elit a sem. Ut ac bibendum libero.
            Sed commodo turpis eu libero efficitur malesuada. Ut eleifend leo et
            diam eleifend vehicula porttitor at nibh. Aenean id volutpat arcu.
            Proin vitae venenatis purus. Curabitur efficitur, ipsum sed mollis
            rutrum, erat nunc pharetra orci, ac imperdiet neque metus nec metus.
            Proin quis congue eros, quis pharetra dolor. Duis volutpat interdum
            nisi, a sollicitudin ipsum. Vestibulum magna ex, malesuada eget
            ornare ac, tincidunt id lorem.
          </p>
        </Panel>
        <Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra maximus massa, ut tempor nulla. Nam in faucibus dolor.
            Donec ac lacinia felis. Etiam placerat enim a odio volutpat, non
            mattis nunc volutpat. Vivamus est leo, condimentum quis consectetur
            eu, molestie vitae nisl. Ut tristique orci non justo ullamcorper
            pretium. Curabitur a erat purus. Suspendisse ac dolor quis leo
            condimentum ultrices at non felis. Phasellus commodo in tortor eu
            imperdiet. Donec imperdiet tempus justo vitae sodales. Nullam tempus
            rutrum suscipit. Nam tortor dui, commodo at luctus quis, luctus non
            erat. Suspendisse at euismod purus, quis aliquam ex. Curabitur
            accumsan ornare massa, lobortis sagittis neque auctor non.
          </p>
          <p>
            Integer rutrum a sem vitae porttitor. Quisque ligula justo, volutpat
            sit amet sapien placerat, fermentum malesuada urna. Quisque quis
            diam sed est congue placerat. Quisque laoreet ut risus eu vulputate.
            Aliquam erat volutpat. Maecenas libero lorem, iaculis nec rutrum ac,
            blandit ac augue. Vivamus arcu dolor, interdum vel metus eu,
            fermentum ullamcorper magna. Cras pharetra molestie libero vel
            egestas. Duis nec ligula at nisi efficitur faucibus elementum
            pulvinar nisl. Quisque quis venenatis nisi. Quisque porttitor, massa
            ac suscipit efficitur, lorem tellus lobortis justo, quis dictum quam
            mauris sit amet tellus. Suspendisse tempor viverra consectetur.
          </p>
        </Panel>
        <Panel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra maximus massa, ut tempor nulla. Nam in faucibus dolor.
            Donec ac lacinia felis. Etiam placerat enim a odio volutpat, non
            mattis nunc volutpat. Vivamus est leo, condimentum quis consectetur
            eu, molestie vitae nisl. Ut tristique orci non justo ullamcorper
            pretium. Curabitur a erat purus. Suspendisse ac dolor quis leo
            condimentum ultrices at non felis. Phasellus commodo in tortor eu
            imperdiet. Donec imperdiet tempus justo vitae sodales. Nullam tempus
            rutrum suscipit. Nam tortor dui, commodo at luctus quis, luctus non
            erat. Suspendisse at euismod purus, quis aliquam ex. Curabitur
            accumsan ornare massa, lobortis sagittis neque auctor non.
          </p>
          <p>
            Integer rutrum a sem vitae porttitor. Quisque ligula justo, volutpat
            sit amet sapien placerat, fermentum malesuada urna. Quisque quis
            diam sed est congue placerat. Quisque laoreet ut risus eu vulputate.
            Aliquam erat volutpat. Maecenas libero lorem, iaculis nec rutrum ac,
            blandit ac augue. Vivamus arcu dolor, interdum vel metus eu,
            fermentum ullamcorper magna. Cras pharetra molestie libero vel
            egestas. Duis nec ligula at nisi efficitur faucibus elementum
            pulvinar nisl. Quisque quis venenatis nisi. Quisque porttitor, massa
            ac suscipit efficitur, lorem tellus lobortis justo, quis dictum quam
            mauris sit amet tellus. Suspendisse tempor viverra consectetur.
          </p>
        </Panel>
      </div>
    </AppPage>
  );
}

export default Home;
