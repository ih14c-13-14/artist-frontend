export type VerificationTextFieldProps = {
  variant: 'outlined' | 'filled' | 'standard';
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
