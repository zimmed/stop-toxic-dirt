import * as React from 'react';
import classnames from 'classnames';

// tslint:disable-next-line:no-submodule-imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Icon.css';

export interface IProps {
  /** Fontawesome Icon Name (see: https://fontawesome.com/icons?d=gallery&m=free) */
  name: string;
  /** Fontawesome Icon Style (default: 'solid') */
  type?: 'solid' | 'brand';

  id?: string;
  style?: object;
  className?: string;
  size?: string;
  color?: string;
}

function Icon({
  name,
  type = 'solid',
  id,
  style,
  className,
  size,
  color,
}: IProps) {
  const s = {
    ...style,
    ...(size ? { fontSize: size } : null),
    ...(color ? { color } : null),
  };

  return (
    <i
      id={id}
      className={classnames('Icon', `fa${type[0]} fa-${name}`, className)}
      style={s}
    />
  );
}

Icon.defaultProps = {
  type: 'solid',
  style: {},
};

export default Icon;
