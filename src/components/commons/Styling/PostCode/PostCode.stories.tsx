import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { PostCode } from './PostCode.component';

const PostCodeStory: ComponentMeta<typeof PostCode> = {
  component: PostCode,
};

export default PostCodeStory;

const Template: StoryFn<typeof PostCode> = args => {
  return <PostCode {...args} />;
};

export const PostCodeDemo = Template.bind({});
PostCodeDemo.args = {
  postCode: 9430831,
  address: '新潟県上越市',
};
