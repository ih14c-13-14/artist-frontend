import { NoFetchedDataException } from '@/error';
import { ArtCard } from '@/features/business/search/ArtCard';
import { Divider } from '@/features/ui/Divider';
import { Stack } from '@/features/ui/Stack';
import isNil from '@/utils/isNil';

import { useArts } from './Arts.hooks';

const Arts = () => {
  const { artSummaries, isLoading, onFavoriteClick } = useArts();
  if (isLoading) return <div>loading...</div>;
  if (isNil(artSummaries)) throw new NoFetchedDataException();

  return (
    <Stack divider={<Divider />} gap="8px">
      {artSummaries.map((artSummary, idx) => (
        <ArtCard
          key={`${artSummary['arts.id']}${idx}`}
          artSummary={artSummary}
          // TODO: 詳細ページに遷移させる
          onCardClick={() => {}}
          onFavoriteClick={onFavoriteClick}
        />
      ))}
    </Stack>
  );
};

export default Arts;
