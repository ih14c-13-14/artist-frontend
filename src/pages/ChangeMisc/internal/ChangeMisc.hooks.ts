import { useCallback, useState } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';
import { DirectAccessState } from '@/routes/utils/types';

import { PAGE_TYPE } from './ChangeMisc.constants';
import { ChangeMiscFormType } from './ChangeMisc.types';
import { useChangeMiscMutation } from './hooks/useChangeMiscMutation';

export const useChangeMisc = ({
  getValues,
}: {
  getValues: UseFormGetValues<ChangeMiscFormType>;
}) => {
  const [pageType, setPageType] = useState<
    (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
  >(PAGE_TYPE.INPUT);

  const mutate = useChangeMiscMutation();
  const navigate = useNavigate();
  const routes = getRoutes();

  const onConfirm = useCallback(() => {
    setPageType(PAGE_TYPE.CONFIRM);
  }, []);

  const onBackToInput = useCallback(() => {
    setPageType(PAGE_TYPE.INPUT);
  }, []);

  const onSubmit = useCallback(async () => {
    mutate.mutate(getValues());
    navigate(routes.changeMiscCompleted.path, {
      state: {
        isDirectAccess: true,
      } satisfies DirectAccessState,
    });
  }, [getValues, mutate, navigate, routes.changeMiscCompleted.path]);

  return {
    pageType,
    onConfirm,
    onBackToInput,
    onSubmit,
  };
};
