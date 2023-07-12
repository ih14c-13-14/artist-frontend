import { ButtonProps as MuiButtonProps, SvgIconTypeMap } from '@mui/material';

export type BookmarkProps = MuiButtonProps & {
  isAlradyBookmarked: boolean;
};
