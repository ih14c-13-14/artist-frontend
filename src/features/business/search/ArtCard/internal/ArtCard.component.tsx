import { useCallback, useMemo } from 'react';

import { COLOR } from '@/constants/COLOR';
import { Icon } from '@/features/ui/Icon';
import { Image } from '@/features/ui/Image';
import { Spacer } from '@/features/ui/Spacer';
import { Stack } from '@/features/ui/Stack';

import styles from './ArtCard.module.scss';
import { ArtCard } from './ArtCard.types';

const ArtCard = ({
  artSummary,
  onCardClick,
  onFavoriteClick: onFavoriteClickProp,
}: ArtCard) => {
  const onFavoriteClick = useCallback(
    (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      onFavoriteClickProp({
        artId: artSummary['arts.id'],
      });
    },
    [artSummary, onFavoriteClickProp]
  );

  const favoriteIconColor = useMemo(() => {
    return artSummary.is_favorited ? COLOR.PRIMARY : '#9D9D9D';
  }, [artSummary.is_favorited]);

  return (
    <div className={styles.cardContainer} onClick={onCardClick}>
      <Stack gap="16px" direction="row">
        <Image
          src={artSummary['arts.image_path']}
          alt={artSummary['arts.name']}
          width="96px"
          height="96px"
          className={styles.image}
        />
        <Stack gap="4px" width="100%">
          <Spacer size="8px" />
          <Stack direction="row" justifyContent="space-between" width="100%">
            <p className={styles.title}>{artSummary['arts.name']}</p>
            <Icon
              type="Bookmark"
              size="24px"
              fill={favoriteIconColor}
              onClick={onFavoriteClick}
            />
          </Stack>
          <p className={styles.artistName}>{artSummary['authors.name']}</p>
          <div className={styles.address}>
            <Icon type="Map" fill="#333" size="20px" />
            {artSummary['arts.address']}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default ArtCard;
