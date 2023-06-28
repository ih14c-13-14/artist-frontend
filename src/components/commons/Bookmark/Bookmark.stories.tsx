import { TurnedIn, TurnedInNot } from '@mui/icons-material/';

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
  icon: TurnedInNot,
};

export const Bookmarked = Template.bind({});
Bookmarked.args = {
  icon: TurnedIn,
};
