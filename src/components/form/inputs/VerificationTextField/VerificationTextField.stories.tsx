import React from 'react';
import { ComponentMeta, StoryFn } from '@storybook/react';
import { VerificationTextField } from './VerificationTextField.component';

const VerificationTextFieldStory: ComponentMeta<typeof VerificationTextField> =
  {
    component: VerificationTextField,
  };

export default VerificationTextFieldStory;

const Template: StoryFn<typeof VerificationTextField> = args => {
  return <VerificationTextField {...args} />;
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  variant: 'filled',
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Standard',
  variant: 'standard',
};
