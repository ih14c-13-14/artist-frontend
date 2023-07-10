export type GoogleMapProps = {
  /** 住所、もしくは著名な建物名など */
  q: string;
  className?: HTMLElement['className'];
};

export type SrcOptions = {
  /** 住所、もしくは著名な建物名など */
  q: string;
  apiKey: string;
  zoom: number;
};
