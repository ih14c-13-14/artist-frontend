import type { FieldValues } from 'react-hook-form';
import { useForm as useBaseForm } from 'react-hook-form'; // eslint-disable-line @typescript-eslint/no-restricted-imports

import type { UseFormProps } from './useForm.types';

// NOTE: プロパティdefaultValues, resolverの指定を必須とする
// reValidateMode, shouldFocusError, shouldUnregister, shouldUseNativeValidation, criteriaMode, delayErrorは画面側で指定できないようにする
export const useForm = <TFieldValues extends FieldValues>(
  {
    defaultValues,
    resolver,
    values,
    resetOptions,
    context,
  }: UseFormProps<TFieldValues>,
  error?: any // TODO: API用のクライアントが決まらないとどうにもならない
) => {
  const { handleSubmit, register, formState, setError, ...rest } = useBaseForm({
    defaultValues,
    resolver,
    values,
    resetOptions,
    context,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
    delayError: 0,
  });

  // TODO: エラーハンドリングの方針が未決定
  // const setRootError = useCallback(
  //   (rootErrorMessage: string) => {
  //     setError('root.formTop', { type: 'formTop', message: rootErrorMessage });
  //   },
  //   [setError]
  // );

  return {
    handleSubmit,
    register,
    formState,
    setError,
    ...rest,
  } as const;
};
