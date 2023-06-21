import { ButtonProps as MuiButtonProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type IconWithLabelProps = MuiButtonProps & {
  icon: OverridableComponent<SvgIconTypeMap>;
  label: string;
};
