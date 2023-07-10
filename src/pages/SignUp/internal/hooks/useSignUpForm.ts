import { Choices } from '@/features/form/inputs/commons/types';
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
    getValues,
    formState: { isValid },
  } = useForm<SignUpFormType>({
    defaultValues: {},
    resolver: resolver(schema),
  });

  const devFormChoices = {
    age_group: [
      {
        id: 10,
        name: '10代',
      },
      {
        id: 20,
        name: '20代',
      },
    ],
    gender: [
      {
        id: 1,
        name: '男性',
      },
      {
        id: 2,
        name: '女性',
      },
      {
        id: 3,
        name: 'その他',
      },
    ],
    prefecture: [
      {
        id: 10,
        name: '群馬県',
      },
      {
        id: 20,
        name: '長野県',
      },
    ],
  } as const satisfies {
    [key in keyof SignUpFormType]?: Choices<number>;
  };
  const formChoices = devFormChoices;

  return {
    register,
    control,
    isValid,
    getValues,
    formChoices,
    handleSubmit: handleSubmit(() => {}),
  };
};
