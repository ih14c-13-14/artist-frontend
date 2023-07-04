import type { SxProps } from '@/features/ui/library';

export type GoogleMapProps = {
  /** 住所、もしくは著名な建物名など */
  q: string;
  sx?: SxProps;
};

export type SrcOptions = {
  /** 住所、もしくは著名な建物名など */
  q: string;
  apiKey: string;
  zoom: number;
};
