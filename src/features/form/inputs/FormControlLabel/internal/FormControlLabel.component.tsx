import { MuiFormControlLabel } from '@/features/form/inputs/library';

import { FormControlLabelProps } from './FormControlLabel.types';

/**
 * @deprecated Checkboxに移譲する予定
 */
const FormControlLabel = (props: FormControlLabelProps) => {
  return <MuiFormControlLabel {...props} />;
};

export default FormControlLabel;
