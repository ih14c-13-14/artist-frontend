import { Button as MuiButton } from '@mui/material';

import { SignProps } from './SignIcon.type';

export const SignIcon = ({
  icon,
  label,
  variant = 'text',
  disabled,
  color = 'inherit',
  ...rest
}: SignProps) => {
  const IconComponent = icon;

  return (
    <MuiButton variant={variant} disabled={disabled} color={color} {...rest}>
      <IconComponent />
    </MuiButton>
  );
};
