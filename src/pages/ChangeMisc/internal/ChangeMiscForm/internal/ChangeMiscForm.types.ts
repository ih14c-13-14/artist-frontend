import { Control, UseFormRegister } from 'react-hook-form';

import {
  ChangeMiscFormChoices,
  ChangeMiscFormType,
} from '../../ChangeMisc.types';

export type ChangeMiscFormProps = {
  onConfirm: () => void;
  register: UseFormRegister<ChangeMiscFormType>;
  control: Control<ChangeMiscFormType, {}>;
  isValid: boolean;
  formChoices: ChangeMiscFormChoices;
};
