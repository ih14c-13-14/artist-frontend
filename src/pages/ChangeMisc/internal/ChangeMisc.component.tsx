import { memo } from 'react';

import { NoFetchedDataException } from '@/error';
import assertNever from '@/utils/assertNever';
import { useAppSWR } from '@/utils/axios';
import isNil from '@/utils/isNil';

import { PAGE_TYPE } from './ChangeMisc.constants';
import { useChangeMisc } from './ChangeMisc.hooks';
import { ChangeMiscFormChoices, UserCurrentSettings } from './ChangeMisc.types';
import { ChangeMiscConfirm } from './ChangeMiscConfirm';
import { ChangeMiscForm } from './ChangeMiscForm';
import { useChangeMiscForm } from './hooks/useChangeMiscForm';

const InternalChangeMisc = ({
  formChoices,
  currentValues,
}: {
  formChoices: ChangeMiscFormChoices;
  currentValues: UserCurrentSettings;
}) => {
  const { register, control, handleSubmit, isValid, getValues } =
    useChangeMiscForm({ currentValues });
  const { pageType, onConfirm, onBackToInput, onSubmit } = useChangeMisc({
    getValues,
  });

  const Page = memo(() => {
    switch (pageType) {
      case PAGE_TYPE.INPUT:
        return (
          <ChangeMiscForm
            onConfirm={onConfirm}
            register={register}
            control={control}
            isValid={isValid}
            formChoices={formChoices}
          />
        );
      case PAGE_TYPE.CONFIRM:
        return (
          <ChangeMiscConfirm
            onBackToInput={onBackToInput}
            onSubmit={onSubmit}
            getValues={getValues}
          />
        );
      default:
        assertNever(pageType);
    }
    return pageType;
  });

  return (
    <form onSubmit={handleSubmit}>
      <Page />
    </form>
  );
};

const ChangeMisc = () => {
  const { data, isLoading } = useAppSWR({
    url: '/api/v1/users/others-change-page/choices',
    method: 'get',
  });

  // TODO: ローディング中のフォールバックUIを考えておく
  if (isLoading) return <div>loading...</div>;

  if (isNil(data)) throw new NoFetchedDataException();

  const { currentValues, ...formChoices } = data;

  return (
    <InternalChangeMisc
      formChoices={formChoices}
      currentValues={currentValues}
    />
  );
};

export default ChangeMisc;
