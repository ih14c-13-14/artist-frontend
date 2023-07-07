import { ComponentMeta, StoryFn } from '@/utils/storybook';

import Button from './Button.component';

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
};

export default ButtonStory;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: '山路を登りながら',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'OUTLINED',
  children: '山路を登りながら',
};

export const Plain = Template.bind({});
Plain.args = {
  variant: 'PLAIN',
  children: '山路を登りながら',
};
