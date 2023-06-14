import { default as MuiButton } from '@mui/material/Button';
import { ButtonProps } from './NormalButton.type';

export const NormalButton = ({
  label,
  variant = 'contained',
  disabled,
  color = 'error',
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} disabled={disabled} color={color} {...rest}>
      {label}
    </MuiButton>
  );
};
