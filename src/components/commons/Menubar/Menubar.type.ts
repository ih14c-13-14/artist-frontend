import { SvgIconTypeMap } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { OverridableComponent } from '@mui/material/OverridableComponent';


export type MenubarProps = MuiButtonProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: OverridableComponent<SvgIconTypeMap>;
};