import { ComponentPropsWithoutRef } from 'react';

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
