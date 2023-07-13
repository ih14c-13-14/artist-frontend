import type { Meta } from '@storybook/react';

import { NoFetchedDataException } from '@/error';
import { useSignIn } from '@/features/auth';
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
  const { signIn } = useSignIn();
  signIn({
    email: '',
    password: '',
  });
  const { data: artSummaries, isLoading } = useAppSWR({
    url: '/api/v1/arts',
    method: 'get',
  });

  if (isLoading) return <div>loading...</div>;
  if (isNil(artSummaries)) throw new NoFetchedDataException();
  const tripleSummaries = artSummaries
    .concat(artSummaries)
    .concat(artSummaries);

  const mockedFavoriteHandler = async ({ artId }: { artId: string }) => {
    await new Promise<void>(resolve => {
      // eslint-disable-next-line no-console
      console.log('mockedFavoriteHandler', artId);
      resolve();
    });
  };
  return (
    <Stack divider={<Divider />} gap="8px">
      {tripleSummaries.map((artSummary, idx) => (
        <ArtCard
          key={`${artSummary['arts.id']}${idx}`}
          artSummary={artSummary}
          onCardClick={() => {}}
          onFavoriteClick={mockedFavoriteHandler}
        />
      ))}
    </Stack>
  );
};
