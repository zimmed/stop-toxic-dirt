import * as React from 'react';
import cx from 'classnames';
import { useContext } from '~features/state';
import { A } from '~features/ui/components';
import DivBtn from '../DivBtn';

import './Image.css';

export interface IProps {
  src: string;
  source?: { src: string; name: string };
  className?: string;
  caption?: string;
  id?: string;
  crop?: boolean;
  zoom?: number;
  style?: object;
  onClick?: () => void;
}

function Image({
  src,
  source,
  onClick,
  zoom = 100,
  crop = false,
  caption,
  className,
  style,
  id,
}: IProps) {
  let linkRef: HTMLAnchorElement;
  const state = useContext();
  const action = () => {
    if (onClick) {
      onClick();
    }
    if (source && linkRef) {
      linkRef.click();
    }
  };
  const zVal = Math.floor(zoom * state.zoom);

  return (
    <DivBtn
      className={cx('Image', source && 'source', crop && 'crop', className)}
      id={id}
      disabled={!onClick && !source}
      action={action}
      style={style}
    >
      <>
        <img
          src={src}
          alt={caption || src}
          style={{
            zoom: `${zVal}%`,
          }}
        />
        {caption ? <span className="caption">{caption}</span> : null}
        {source ? (
          <>
            <span className="source">[ source: {source.name} ]</span>
            <A
              className="hide"
              src={source.src}
              ref={(ref) => (ref ? (linkRef = ref) : null)}
            >
              #
            </A>
          </>
        ) : null}
      </>
    </DivBtn>
  );
}

Image.defaultProps = {
  zoom: 100,
  crop: false,
};

export default Image;
