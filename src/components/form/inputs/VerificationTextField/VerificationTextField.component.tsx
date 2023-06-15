import * as React from 'react';
import TextField from '@mui/material/TextField';
import { VerificationTextFieldProps } from './VerificationTextField.type';

export const VerificationTextField = ({
  label,
  variant,
  ...rest
}: VerificationTextFieldProps) => {
  const [val, setVal] = React.useState('');
  return (
    <TextField
      label={label}
      value={val}
      variant={variant}
      {...rest}
      onChange={e => {
        setVal(e.target.value);
      }}
    />
  );
};
