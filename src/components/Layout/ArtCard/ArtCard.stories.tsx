import { Divider } from '@/features/ui/Divider';
import { Stack } from '@/features/ui/Stack';
import { ComponentMeta } from '@/utils/storybook';

import { ArtCard } from './ArtCard.component';
import imageFile from './ArtCard.stories.flower.jpg';

const ArtCardStory: ComponentMeta<typeof ArtCard> = {
  component: ArtCard,
};

export default ArtCardStory;

export const ArtCardDemo = () => {
  return (
    <ArtCard
      imageSrc={imageFile}
      title="しましまなしま"
      author="ロイド・ダロ"
      address="〒943-0831新潟県上越市…"
    />
  );
};

export const MultiArtCardsDemo = () => {
  return (
    <Stack gap={'10px'} divider={<Divider />}>
      <ArtCard
        imageSrc={imageFile}
        title="1しましまなしま"
        author="1ロイド・ダロ"
        address="1〒943-0831新潟県上越市…"
      />
      <ArtCard
        imageSrc={imageFile}
        title="2しましまなしま"
        author="2ロイド・ダロ"
        address="2〒943-0831新潟県上越市…"
      />
      <ArtCard
        imageSrc={imageFile}
        title="3しましまなしま"
        author="3ロイド・ダロ"
        address="3〒943-0831新潟県上越市…"
      />
    </Stack>
  );
};
