import { ComponentMeta } from '@/utils/storybook';

import { ArtCard } from './ArtCard.component';

const ArtCardStory: ComponentMeta<typeof ArtCard> = {
  component: ArtCard,
};

export default ArtCardStory;

export const ArtCardDemo = () => {
  return (
    <ArtCard
      imageSrc="" // ここどうすればいいんですか？
      title="しましまなしま"
      author="ロイド・ダロ"
      address="〒943-0831新潟県上越市…"
    />
  );
};
