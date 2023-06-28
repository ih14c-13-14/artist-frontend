import { ButtonProps as MuiButtonProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type BookmarkProps = MuiButtonProps & {
  icon: OverridableComponent<SvgIconTypeMap>;
};
