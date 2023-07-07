import type { Meta } from '@storybook/react';

import { TextInput } from '@/features/form/inputs/TextInput';

import InputWrapper from './InputWrapper.component';

const InputWrapperStory: Meta<typeof InputWrapper> = {
  component: InputWrapper,
  args: {},
};

export default InputWrapperStory;

export const Default = () => {
  return (
    <InputWrapper label="input label">
      <TextInput />
    </InputWrapper>
  );
};
