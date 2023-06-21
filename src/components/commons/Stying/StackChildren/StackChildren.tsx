import { CSSProperties, PropsWithChildren } from 'react';

type StackChildrenProps = Pick<CSSProperties, 'flexDirection' | 'gap'>;

export const StackChildren = ({
  children,
  flexDirection = 'column',
  gap,
}: PropsWithChildren<StackChildrenProps>) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection,
        gap,
      }}
    >
      {children}
    </div>
  );
};
