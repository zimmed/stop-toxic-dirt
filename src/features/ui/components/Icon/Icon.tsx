import * as React from 'react';
import classnames from 'classnames';

// tslint:disable-next-line:no-submodule-imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Icon.css';

export interface IProps {
  name: string;
  id?: string;
  style?: object;
  className?: string;
  size?: string;
  color?: string;
}

function Icon({ name, id, style, className, size, color }: IProps) {
  const s = {
    ...style,
    ...(size ? { fontSize: size } : null),
    ...(color ? { color } : null),
  };

  return (
    <i
      id={id}
      className={classnames('Icon fa', `fa-${name}`, className)}
      style={s}
    />
  );
}

Icon.defaultProps = {
  style: {},
};

export default Icon;
