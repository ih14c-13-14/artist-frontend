import { useCallback } from 'react';

import { paths } from '@/generated/schema';
import { useForm } from '@/hooks/useForm';
import { request } from '@/utils/axios';
import validation, { resolver } from '@/utils/validation/validation';

export type MutateArgs = NonNullable<
  paths['/api/v1/users/password-reset']['post']['requestBody']
>['content']['application/json'];

export type FormType = {
  email: string;
};

export const usePasswordForget = () => {
  const validationSchema = validation.object().shape({
    email: validation.string().email().required(),
  });
  const { getValues, handleSubmit, control, register } = useForm<FormType>({
    defaultValues: {},
    resolver: resolver(validationSchema),
  });

  const mutate = useCallback(async ({ email }: MutateArgs) => {
    try {
      const response = await request({
        url: '/api/v1/users/password-reset',
        method: 'post',
        data: {
          email,
        },
      });

      return {
        response,
      } as const;
    } catch (e) {
      console.error(e);
    }
  }, []);

  const onSubmit = useCallback(async () => {
    const { email } = getValues();

    await mutate({ email });
    // TODO: #141|完了画面へリダイレクト
  }, [getValues, mutate]);

  return {
    control,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
