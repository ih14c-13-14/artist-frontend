import type { Meta } from '@storybook/react';

import { NoFetchedDataException } from '@/error';
import { Divider } from '@/features/ui/Divider';
import { Stack } from '@/features/ui/Stack';
import { useAppSWR } from '@/utils/axios';
import isNil from '@/utils/isNil';

import ArtCard from './ArtCard.component';

const ArtCardStory: Meta<typeof ArtCard> = {
  component: ArtCard,
};

export default ArtCardStory;

export const Default = () => {
  const { data: artSummaries, isLoading } = useAppSWR({
    url: '/api/v1/arts',
    method: 'get',
  });
  if (isLoading) return <div>loading...</div>;
  if (isNil(artSummaries)) throw new NoFetchedDataException();
  const tripleSummaries = artSummaries
    .concat(artSummaries)
    .concat(artSummaries);
  return (
    <Stack divider={<Divider />} gap="8px">
      {tripleSummaries.map((artSummary, idx) => (
        <ArtCard
          key={`${artSummary['arts.id']}${idx}`}
          artSummary={artSummary}
          onClick={() => {}}
        />
      ))}
    </Stack>
  );
};
