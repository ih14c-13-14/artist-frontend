import type { PropsWithChildren } from 'react';

import { MuiCardActions } from '@/features/ui/library';

import type { CardActionsProps } from './CardActions.types';

const CardActions = ({
  children,
  ...rest
}: PropsWithChildren<CardActionsProps>) => {
  return <MuiCardActions {...rest}>{children}</MuiCardActions>;
};

export default CardActions;
