import { NoFetchedDataException } from '@/error';
import { ArtCard } from '@/features/business/search/ArtCard';
import { Divider } from '@/features/ui/Divider';
import { Stack } from '@/features/ui/Stack';
import isNil from '@/utils/isNil';

import { useAuthors } from './Authors.hooks';

const Authors = () => {
  const { artSummaries, isLoading, onFavoriteClick } = useAuthors();
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

export default Authors;
