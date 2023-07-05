import { MuiFormControlLabel } from '@/features/form/inputs/library';

import { FormControlLabelProps } from './FormControlLabel.types';

const FormControlLabel = (props: FormControlLabelProps) => {
  return <MuiFormControlLabel {...props} />;
};

export default FormControlLabel;
