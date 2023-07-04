import type { PropsWithChildren } from 'react';

import { MuiCard } from '@/features/ui/library';

import type { CardProps } from './Card.types';

const Card = ({ children, ...rest }: PropsWithChildren<CardProps>) => {
  return <MuiCard {...rest}>{children}</MuiCard>;
};

export default Card;
