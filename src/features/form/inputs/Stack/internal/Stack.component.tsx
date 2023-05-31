import type { CSSProperties, ReactNode, ReactElement } from 'react';

import { joinChildren } from './joinChildren';

export type StackProps = Pick<
  CSSProperties,
  | 'flexDirection'
  | 'gap'
  | 'flexWrap'
  | 'flexFlow'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
> & {
  children: ReactNode;
  divider?: ReactElement;
};

const Stack = ({ children, divider, ...style }: StackProps) => {
  return (
    <div style={{ display: 'flex', ...style }}>
      {divider ? joinChildren(children, divider) : children}
    </div>
  );
};

export default Stack;
