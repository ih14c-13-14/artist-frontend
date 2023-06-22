import { Button as MuiButton, Typography } from '@mui/material';

import { IconWithLabelProps } from './IconWithLabel.type';
import { StackChildren } from '../Styling/StackChildren/StackChildren';

export const IconWithLabel = ({
  label,
  icon,
  variant = 'text',
  disabled,
  color = 'inherit',
  ...rest
}: IconWithLabelProps) => {
  const IconComponent = icon;

  return (
    <MuiButton variant={variant} disabled={disabled} color={color} {...rest}>
      <StackChildren>
        <IconComponent />
        <Typography>{label}</Typography>
      </StackChildren>
    </MuiButton>
  );
};
