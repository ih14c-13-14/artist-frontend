import { default as MuiButton } from '@mui/material/Button';
import { ButtonProps } from './Button.type';

const Button = ({
  label,
  variant = 'contained',
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} disabled={disabled} {...rest}>
      {label}
    </MuiButton>
  );
};

export default Button;
