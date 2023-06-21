import { ArViewerProps } from './ArViewer.types';

const ArViewer = ({ coverImage, realityModelPath }: ArViewerProps) => {
  return (
    <a rel="ar" href={realityModelPath}>
      <img src={coverImage} />
    </a>
  );
};

export default ArViewer;
