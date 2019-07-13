import * as React from 'react';
import classnames from 'classnames';
import { onEnterKey } from '~utils';

import './DivBtn.css';

export interface IProps {
  /** Callback to execute when button is clicked (or activated by keyboard accessibility) */
  action: () => any;
  /** Allow action propagation to parent nodes (default: false) */
  propagate?: boolean;
  /** Adds `disabled` class to element if true (default: false), and dismounts action callback. */
  disabled?: boolean;

  children?: React.ReactNode;
  className?: string;
  style?: object;
  id?: string;
}

function DivBtn({
  id,
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
      id={id}
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
