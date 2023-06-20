import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { IconProps } from '@mui/material';

export type ButtonProps = MuiButtonProps & {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement<IconProps>;
};
