import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import { ChangeEmailFormType } from '../ChangeEmail.types';

const schema = validation.object().shape({
  email: validation.string().email().required(),
} satisfies {
  [key in keyof ChangeEmailFormType]: unknown;
});

export const useChangeEmailForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<ChangeEmailFormType>({
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
