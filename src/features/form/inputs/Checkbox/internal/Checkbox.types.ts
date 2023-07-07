import { ReactNode } from 'react';

import { InputBasePropsWithoutLabel } from '@/features/form/inputs/commons/types';

export type CheckboxProps = Omit<InputBasePropsWithoutLabel, 'onBlur'> & {
  dataTestid?: string;
  choiceLabel: ReactNode;
  onChangeValue?: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: (event: { target: any; type?: any }) => void;
};
