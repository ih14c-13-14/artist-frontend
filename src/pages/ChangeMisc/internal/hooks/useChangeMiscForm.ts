import { useForm } from '@/hooks/useForm';
import validation, { resolver } from '@/utils/validation/validation';

import { ChangeMiscFormType, UserCurrentSettings } from '../ChangeMisc.types';

const schema = validation.object().shape({
  age_group: validation.string().required(),
  gender: validation.string().required(),
  prefecture: validation.string().required(),
} satisfies {
  [key in keyof ChangeMiscFormType]: unknown;
});

export const useChangeMiscForm = ({
  currentValues,
}: {
  currentValues: UserCurrentSettings;
}) => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useForm<ChangeMiscFormType>({
    defaultValues: {
      ...currentValues,
    },
    resolver: resolver(schema),
  });

  return {
    register,
    control,
    isValid,
    getValues,
    handleSubmit: handleSubmit(() => {}),
  };
};
