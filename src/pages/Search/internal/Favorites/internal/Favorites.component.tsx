import { useMemo } from 'react';

import { NoFetchedDataException } from '@/error';
import { ArtCard } from '@/features/business/search/ArtCard';
import { Divider } from '@/features/ui/Divider';
import { Spacer } from '@/features/ui/Spacer';
import { Stack } from '@/features/ui/Stack';
import isNil from '@/utils/isNil';

import { useFavorites } from './Favorites.hooks';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const { artSummaries, isLoading, onFavoriteClick } = useFavorites();
  const display = useMemo(() => {
    if (isNil(artSummaries) || artSummaries.length === 0)
      return (
        <div>
          <Spacer size="24px" />
          <h1 className={styles.title}>
            見逃したくない作品を追加してみましょう
          </h1>
          <Spacer size="40px" />
          <p className={styles.description}>
            作品をお気に入り追加すると、その作品が追加した順番にここに表示されます。
          </p>
        </div>
      );
    return artSummaries.map((artSummary, idx) => (
      <ArtCard
        key={`${artSummary['arts.id']}${idx}`}
        artSummary={artSummary}
        // TODO: 詳細ページに遷移させる
        onCardClick={() => {}}
        onFavoriteClick={onFavoriteClick}
      />
    ));
  }, [artSummaries, onFavoriteClick]);

  if (isLoading) return <div>loading...</div>;
  if (isNil(artSummaries)) throw new NoFetchedDataException();

  return (
    <Stack divider={<Divider />} gap="8px">
      {display}
    </Stack>
  );
};

export default Favorites;
