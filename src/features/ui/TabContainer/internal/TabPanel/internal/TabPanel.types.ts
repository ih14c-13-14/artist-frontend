import type { PropsWithChildren } from 'react';

export type TabPanelProps = PropsWithChildren<{
  value: number | string;
  selected: boolean;
}>;
