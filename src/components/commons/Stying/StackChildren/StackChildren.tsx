import { PropsWithChildren } from 'react';

type StackChildrenProps = {
  direction: 'column' | 'column-reverse' | 'row' | 'row-reverse' | undefined;
  gap: 'px' | 'em' | '%' | `calc(${string})`;
};

export const StackChildren = ({
  children,
  direction,
  gap,
}: PropsWithChildren<StackChildrenProps>) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: direction,
        gap,
      }}
    >
      {children}
    </div>
  );
};
