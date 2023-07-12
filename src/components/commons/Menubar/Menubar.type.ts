import { ButtonProps as MuiButtonProps } from '@mui/material/Button';


export type MenubarProps = MuiButtonProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};