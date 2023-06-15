import { default as MuiButton } from '@mui/material/Button';
import { ButtonProps } from './NormalButton.type';

export const NormalButton = ({
  label,
  onClick,
  variant = 'contained',
  disabled,
  color = 'error',
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      onClick={onClick}
      {...rest}
    >
      {label}
    </MuiButton>
  );
};
