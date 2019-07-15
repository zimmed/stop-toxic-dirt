import * as React from 'react';

export interface IProps {
  children: React.ReactNode;
  src: string;
  sameTab?: boolean;
  id?: string;
  className?: string;
  style?: object;
}

function A(
  { src, sameTab, id, className, style, children }: IProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const props = sameTab
    ? {}
    : {
        target: '_blank',
        rel: 'noopener noreferrer',
      };

  return (
    <a
      href={src}
      ref={ref}
      className={className}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

export default React.forwardRef(A);
