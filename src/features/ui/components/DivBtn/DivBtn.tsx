import * as React from 'react';
import classnames from 'classnames';
import { onEnterKey } from '~utils';

import './DivBtn.css';

export interface IProps {
  action: () => any;
  propagate?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: object;
}

function DivBtn({
  action,
  propagate,
  children,
  disabled,
  className,
  style,
}: IProps) {
  const mFn = propagate
    ? action
    : (e: React.MouseEvent) => {
        action();
        e.stopPropagation();
      };
  const kFn = propagate
    ? action
    : (e: React.KeyboardEvent) => {
        action();
        e.stopPropagation();
      };

  return (
    <div
      className={classnames('DivBtn', disabled && 'disabled', className)}
      onClick={disabled ? undefined : mFn}
      style={style}
      onKeyPress={disabled ? null : onEnterKey(kFn)}
      tabIndex={0}
      role="button"
    >
      {children}
    </div>
  );
}

export default DivBtn;
