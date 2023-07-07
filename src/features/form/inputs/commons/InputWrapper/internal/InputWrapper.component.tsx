import { PropsWithChildren } from 'react';

import { Stack } from '@/features/ui/Stack';

import styles from './InputWrapper.module.scss';

const InputWrapper = ({
  label,
  children,
}: PropsWithChildren<{ label: string }>) => {
  return (
    <Stack gap="8px">
      <p className={styles.label}>{label}</p>
      {children}
    </Stack>
  );
};

export default InputWrapper;
