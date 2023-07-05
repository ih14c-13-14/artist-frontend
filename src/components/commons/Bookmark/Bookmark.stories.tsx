import { ComponentMeta, StoryFn } from '@/utils/storybook';

import { Bookmark } from './Bookmark.component';

const BookmarkStory: ComponentMeta<typeof Bookmark> = {
  component: Bookmark,
};

export default BookmarkStory;

const Template: StoryFn<typeof Bookmark> = args => {
  return <Bookmark {...args} />;
};

export const NotBookmarked = Template.bind({});
NotBookmarked.args = {
  isAlradyBookmarked: false,
};

export const AlreadyBookmarked = Template.bind({});
AlreadyBookmarked.args = {
  isAlradyBookmarked: true,
};
