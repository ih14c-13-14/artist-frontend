import type { PropsWithChildren } from 'react';

import { MuiCardContent } from '@/features/ui/library';

import type { CardContentProps } from './CardContent.types';

const CardContent = ({
  children,
  ...rest
}: PropsWithChildren<CardContentProps>) => {
  return <MuiCardContent {...rest}>{children}</MuiCardContent>;
};

export default CardContent;
