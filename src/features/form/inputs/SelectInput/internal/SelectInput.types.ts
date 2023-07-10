import { Exclusive } from '@/types/Exclusive';
import Length from '@/types/Length';

import { Choices, InputBasePropsWithLabel } from '../../commons/types';

export type SelectInputProps<TValue = string> = Omit<
  InputBasePropsWithLabel,
  'value' | 'onChange' | 'defaultValue' | 'height'
> & {
  name?: string;
  choices: Choices<TValue>;
  onBlur?: () => void;
  width?: Length;
  minHeight?: Length;
  selectedValuePaddingLeft?: Length;
} & Exclusive<
    {
      value: TValue;
      onChange: (value: TValue) => void;
    },
    {
      defaultValue?: TValue;
      onChange?: (value: TValue) => void | Promise<void>;
    }
  >;
