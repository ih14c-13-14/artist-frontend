import INPUT_WIDTH from '@/constants/INPUT_WIDTH';
import { MuiTextField } from '@/features/form/inputs/library';

import useTextInput from './TextInput.hooks';
import type { TextInputProps } from './TextInput.types';

const TextInput = ({
  width = INPUT_WIDTH,
  sx,
  size = 'small',
  ...rest
}: TextInputProps) => {
  const { sxMerged } = useTextInput({ width, sx });

  return <MuiTextField size={size} {...rest} sx={sxMerged} />;
};

export default TextInput;
