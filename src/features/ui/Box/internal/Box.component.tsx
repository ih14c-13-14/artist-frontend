import type { PropsWithChildren } from 'react';

import type { MuiBoxProps } from '@/features/ui/library';
import { MuiBox } from '@/features/ui/library';

const Box = ({ children, ...rest }: PropsWithChildren<MuiBoxProps>) => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

export default Box;
