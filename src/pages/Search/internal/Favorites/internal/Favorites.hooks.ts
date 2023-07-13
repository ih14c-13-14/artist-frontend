import { useCallback } from 'react';

import { LogicException } from '@/error';
import { useWhoAmI } from '@/hooks/useWhoAmI';
import { request, useAppSWR } from '@/utils/axios';
import isNil from '@/utils/isNil';

export const useFavorites = () => {
  const { userId } = useWhoAmI();

  const {
    data: artSummaries,
    isLoading,
    mutate,
  } = useAppSWR({
    url: '/api/v1/arts/{user_id}/favorited',
    method: 'get',
    pathParams: {
      user_id: userId,
    },
  });

  const onFavoriteClick = useCallback(
    async ({ artId }: { artId: string }) => {
      try {
        await request({
          url: '/api/v1/arts/{art_id}/favorite',
          // NOTE: artSummariesのうち、該当IDを持つ要素のisFavoriteによってメソッドが変わる
          method: artSummaries?.find(
            artSummary => artSummary['arts.id'] === artId
          )?.is_favorited
            ? 'delete'
            : 'post',
          data: {
            user_id: userId,
          },
          pathParams: {
            artId,
          },
        });

        const updatedSummaries = artSummaries?.map(artSummary => {
          if (isNil(artSummary['is_favorited']))
            throw new LogicException('存在しえないユースケースです');
          if (artSummary['arts.id'] === artId) {
            return {
              ...artSummary,
              isFavorite: !artSummary['is_favorited'],
            };
          }
          return artSummary;
        });

        mutate(updatedSummaries);
      } catch (e) {
        console.error(e);
      }
    },
    [artSummaries, mutate, userId]
  );

  return { artSummaries, isLoading, onFavoriteClick };
};
