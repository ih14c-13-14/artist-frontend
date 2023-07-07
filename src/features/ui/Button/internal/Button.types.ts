import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { PropsWithChildren } from 'react';

export type VariantKey = 'CONTAINED' | 'OUTLINED' | 'PLAIN';

export type MuiBasedButtonProps = MuiButtonProps & {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type ButtonProps = PropsWithChildren<
  {
    dataTestid?: string;
    variant?: VariantKey;
  } & JSX.IntrinsicElements['button']
>;
