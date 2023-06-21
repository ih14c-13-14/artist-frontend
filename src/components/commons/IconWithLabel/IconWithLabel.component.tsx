import { StackChildren } from '../Stying/StackChildren/StackChildren';
import { IconWithLabelProps } from './IconWithLabel.type';
import { Button as MuiButton, Typography } from '@mui/material';

export const IconWithLabel = ({
  label,
  icon,
  variant = 'contained',
  disabled,
  color = 'error',
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
