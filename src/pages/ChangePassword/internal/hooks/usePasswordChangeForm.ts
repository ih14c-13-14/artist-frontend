import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import { PasswordChangeFormType } from '../ChangePassword.types';

const schema = validation.object().shape({
  current_password: validation.string().password().required(),
  new_password: validation.string().password().required(),
  new_password_confirm: validation
    .string()
    .oneOf([validation.ref('new_password')])
    .required(),
} satisfies {
  [key in keyof PasswordChangeFormType]: unknown;
});

export const usePasswordChangeForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<PasswordChangeFormType>({
    defaultValues: {},
    resolver: resolver(schema),
  });

  return {
    register,
    handleSubmit,
    getValues,
    isValid,
  };
};
