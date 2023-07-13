import { paths } from '@/generated/schema';
import { ElementOf } from '@/types/ElementOf';

/**
 * @param onCardClick {() => void} 作品詳細に遷移させるためのハンドラー関数
 */
export type ArtCard = {
  onCardClick: () => void;
  artSummary: ArtSummary;
  onFavoriteClick: ({ artId }: { artId: string }) => Promise<void>;
};

export type ArtSummary = ElementOf<
  paths['/api/v1/arts']['get']['responses']['200']['content']['application/json']
>;
