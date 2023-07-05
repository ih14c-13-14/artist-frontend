import type { MuiTextFieldProps } from '@/features/form/inputs/library';
import type Length from '@/types/Length';

export type TextInputProps = Omit<MuiTextFieldProps, 'type' | 'label'> & {
  width?: Length;
};
