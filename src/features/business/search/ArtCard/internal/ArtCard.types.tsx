import { paths } from '@/generated/schema';
import { ElementOf } from '@/types/ElementOf';

/**
 * @param onClick {() => void} 作品詳細に遷移させるためのハンドラー関数
 */
export type ArtCard = {
  onClick: () => void;
  artSummary: ArtSummary;
};

// TODO: arts.image_pathについて、配列のままかどうか検討する
type ArtSummary = ElementOf<
  paths['/api/v1/arts']['get']['responses']['200']['content']['application/json']
>;
