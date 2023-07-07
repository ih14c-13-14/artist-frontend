import { Stack } from '@/features/ui/Stack';

import styles from './InputWrapper.module.scss';
import { InputWrapperProps } from './InputWrapper.types';

const InputWrapper = ({ label, children }: InputWrapperProps) => {
  return (
    <Stack gap="8px">
      <p className={styles.label}>{label}</p>
      {children}
    </Stack>
  );
};

export default InputWrapper;
