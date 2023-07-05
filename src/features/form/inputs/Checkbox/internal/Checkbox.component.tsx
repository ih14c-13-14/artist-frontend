import { MuiCheckbox } from '@/features/form/inputs/library';

import { CheckboxProps } from './Checkbox.types';

const Checkbox = (props: CheckboxProps) => {
  return <MuiCheckbox {...props} />;
};

export default Checkbox;
