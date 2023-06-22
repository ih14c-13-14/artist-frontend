import { ArViewerProps } from './ArViewer.types';
import ModelViewer from './ModelViewer.component';

const ArViewer = ({
  coverImage,
  glbModelPath,
  realityModelPath,
}: ArViewerProps) => {
  return (
    <ModelViewer
      poster={coverImage}
      glb={glbModelPath}
      reality={realityModelPath}
    />
  );
};

export default ArViewer;
