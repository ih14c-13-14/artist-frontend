export type ImageProps = {
  src: string;
  alt: string;
  fit?: React.CSSProperties['objectFit'];
  width: React.CSSProperties['width'] | number;
  height: React.CSSProperties['height'] | number;
};
