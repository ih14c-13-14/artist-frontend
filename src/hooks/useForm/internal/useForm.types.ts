import type {
  FieldValues,
  Resolver,
  DefaultValues,
  UseFormProps as UseBaseFormProps,
} from 'react-hook-form';

export type UseFormProps<
  TFieldValues extends FieldValues,
  TContext = {} // eslint-disable-line @typescript-eslint/ban-types
> = Required<{
  defaultValues: DefaultValues<TFieldValues>;
  resolver: Resolver<TFieldValues, TContext>;
}> &
  Pick<UseBaseFormProps<TFieldValues>, 'values' | 'resetOptions' | 'context'>;
