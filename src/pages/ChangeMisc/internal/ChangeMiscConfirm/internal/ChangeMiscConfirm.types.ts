import { UseFormGetValues } from 'react-hook-form';

import { ChangeMiscFormType } from '../../ChangeMisc.types';

export type ChangeMiscConfirmProps = {
  onBackToInput: () => void;
  onSubmit: () => void;
  getValues: UseFormGetValues<ChangeMiscFormType>;
};
