import { TextField as MuiTextField } from '@mui/material/';
import { TextFieldProps } from './TextField.type';

export const TextField = ({
  label,
  variant,
  disabled = false,
  ...rest
}: TextFieldProps) => {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      disabled={disabled}
      {...rest}
    />
  );
};
