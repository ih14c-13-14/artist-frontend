import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import { SignUpFormType } from '../SignUp.types';

const schema = validation.object().shape({
  email: validation.string().email().required(),
  password: validation.string().password().required(),
  passwordConfirm: validation
    .string()
    .oneOf([validation.ref('password')])
    .required(),
  age_group: validation.string().required(),
  gender: validation.string().required(),
  prefecture: validation.string().required(),
  isTermsAgreed: validation.boolean().isTrue(),
} satisfies {
  [key in keyof SignUpFormType]: unknown;
});

export const useSignUpForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignUpFormType>({
    defaultValues: {},
    resolver: resolver(schema),
  });

  return {
    register,
    control,
    isValid,
    handleSubmit: handleSubmit(() => {}),
  };
};
