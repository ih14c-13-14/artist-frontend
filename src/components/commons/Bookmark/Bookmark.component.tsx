import { Button as MuiButton } from '@mui/material';

import { BookmarkProps } from './Bookmark.type';

export const Bookmark = ({
  icon,
  variant = 'text',
  disabled,
  color = 'inherit',
  ...rest
}: BookmarkProps) => {
  const IconComponent = icon;

  return (
    <MuiButton variant={variant} disabled={disabled} color={color} {...rest}>
      <IconComponent />
    </MuiButton>
  );
};
