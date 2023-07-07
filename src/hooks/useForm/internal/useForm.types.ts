import type {
  FieldValues,
  Resolver,
  DefaultValues,
  UseFormProps as UseBaseFormProps,
} from 'react-hook-form';

export type UseFormProps<
  TFieldValues extends FieldValues,
  TContext = {},
> = Required<{
  defaultValues: DefaultValues<TFieldValues>;
  resolver: Resolver<TFieldValues, TContext>;
}> &
  Pick<UseBaseFormProps<TFieldValues>, 'values' | 'resetOptions' | 'context'>;
