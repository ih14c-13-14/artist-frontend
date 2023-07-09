import { ComponentPropsWithoutRef } from 'react';

/** 選択肢 */
export type Choice<T = string> = {
  /** form に入る値 */
  id: T;
  /** 表示用ラベル */
  name: string;
};
export type Choices<T = string> = ReadonlyArray<Choice<T>>;

export type ChangeEventType = React.ChangeEvent<HTMLInputElement>;

type InputLabelProps = {
  label?: string;
};

type ExcludedInputType = 'type' | 'placeholder';

export type CustomInputIntrinsicElementsProps<
  T extends 'input' | 'textarea' = 'input',
> = Omit<ComponentPropsWithoutRef<T>, ExcludedInputType> & {
  dataTestid?: string;
};

export type InputBasePropsWithoutLabel<
  T extends 'input' | 'textarea' = 'input',
> = CustomInputIntrinsicElementsProps<T>;

export type InputBasePropsWithLabel<T extends 'input' | 'textarea' = 'input'> =
  InputBasePropsWithoutLabel<T> & InputLabelProps;
