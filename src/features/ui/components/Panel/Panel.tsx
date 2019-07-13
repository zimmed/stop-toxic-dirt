import * as React from 'react';
import cx from 'classnames';
import DivBtn from '../DivBtn';
import Icon from '../Icon';

import './Panel.css';

export type ScrollType = 'x' | 'y' | 'all' | null;

export interface IProps {
  children?: React.ReactNode;
  preview?: boolean;
  scroll?: ScrollType;
  maxHeight?: string;
  className?: string;
  id?: string;
}

function Panel({
  className,
  id,
  children,
  preview = false,
  scroll = null,
  maxHeight = '10em',
}: IProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [trueHeight, setTrueHeight] = React.useState('auto');
  const toggleExpanded = () => setExpanded(!expanded);
  let innerDiv: HTMLDivElement;
  const resize = () =>
    innerDiv ? setTrueHeight(`calc(${innerDiv.clientHeight}px + 4em)`) : null;

  React.useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return (
    <div
      className={cx(
        'Panel',
        preview && 'preview',
        scroll && `scroll-${scroll}`,
        expanded && 'expanded',
        className
      )}
      style={{
        maxHeight: expanded
          ? trueHeight
          : scroll || preview
          ? maxHeight
          : 'auto',
      }}
      id={id}
    >
      <div
        ref={(ref) => {
          if (ref) {
            innerDiv = ref;
          }
        }}
        className="Panel-content"
      >
        {children || null}
      </div>
      {preview ? (
        <DivBtn className="Panel-expand" action={toggleExpanded}>
          <Icon name={expanded ? 'caret-up' : 'caret-down'} />
        </DivBtn>
      ) : null}
    </div>
  );
}

Panel.defaultProps = {
  preview: false,
  scroll: null,
  maxHeight: '10em',
};

export default Panel;
