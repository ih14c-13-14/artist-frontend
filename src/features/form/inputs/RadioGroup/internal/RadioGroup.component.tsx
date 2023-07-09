import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { Stack } from '@/features/ui/Stack';

import { Radio, RadioProps } from '../../Radio';
import { Choices } from '../../commons/types';

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
}

type Props<TValue = string> = {
  name?: string;
  value: TValue;
  disabled?: boolean;
  onChange?: (value: TValue) => void;
  onBlur?: () => void;
  choices: Choices<TValue>;
  RadioProps?: Partial<RadioProps>;
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const InternalRadioGroup = <TValue extends unknown = string>(
  props: Props<TValue>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <Stack gap="30px" direction="row" flexWrap="wrap">
          {props.choices.map(({ id, name }) => (
            <Radio
              key={`${id}`}
              ref={ref}
              {...props.RadioProps}
              name={props.name}
              onChangeValue={() => {
                props.onChange?.(id);
              }}
              onBlur={() => {
                props.onBlur?.();
              }}
              disabled={props.disabled}
              checked={props.value === id}
              choiceLabel={name}
              dataTestId={(props.name ?? '') + id}
            />
          ))}
        </Stack>
      </div>
    </>
  );
};

const RadioGroup = forwardRef(InternalRadioGroup);
export default RadioGroup;
