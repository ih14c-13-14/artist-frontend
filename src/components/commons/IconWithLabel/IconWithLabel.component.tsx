import { StackChildren } from '../Styling/StackChildren/StackChildren';
import { IconWithLabelProps } from './IconWithLabel.type';
import { Button as MuiButton, Typography } from '@mui/material';

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
