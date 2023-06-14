import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps = MuiButtonProps & {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
