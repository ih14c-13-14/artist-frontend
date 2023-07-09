import { useCallback, useState, useMemo } from 'react';
import type { SingleValue } from 'react-select';

import isNil from '@/utils/isNil';

import type { SelectInputProps } from './SelectInput.types';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const useHooks = <TValue extends unknown = string>(
  props: SelectInputProps<TValue>
) => {
  const isControlled = 'value' in props;

  const [internalValue, setInternalValue] = useState(
    isControlled
      ? null
      : 'defaultValue' in props
      ? typeof props?.defaultValue === 'boolean'
        ? props?.defaultValue
        : props?.defaultValue ?? null
      : null
  );

  const handleSelect = useCallback(
    (
      selectedOption: SingleValue<{ value: NonNullable<TValue>; label: string }>
    ) => {
      // NOTE: UnControlledな呼び出しに対応するため内部の状態で管理
      if (!isControlled && selectedOption?.value) {
        setInternalValue(selectedOption?.value);
      }
      selectedOption?.value && void props.onChange?.(selectedOption?.value);
    },
    [isControlled, props]
  );

  const currentValue = isControlled
    ? 'value' in props
      ? typeof props?.value === 'boolean'
        ? props?.value
        : props?.value ?? null
      : null
    : internalValue;

  const currentOption =
    typeof currentValue === 'boolean' || currentValue
      ? {
          value: currentValue,
          label:
            props.choices.find(choice => currentValue === choice.id)?.name ??
            '',
        }
      : null;

  const options: ReadonlyArray<{
    value: NonNullable<TValue>;
    label: string;
  }> = useMemo(() => {
    return props.choices
      .filter(choice => !isNil(choice.id))
      .map(choice => {
        return {
          // HACK: 型を合わせるのが難しかった。filterでnonNullableを担保。
          value: choice.id as NonNullable<TValue>,
          label: choice.name,
        };
      });
  }, [props.choices]);

  return {
    options,
    currentOption,
    handleSelect,
  } as const;
};
export default useHooks;
