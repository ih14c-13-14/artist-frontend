// HACK <model-viewer />は本ファイル以外では使わせない
/* eslint-disable @typescript-eslint/no-namespace */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      poster: string;
      alt: string;
      ar: boolean;
      scale: string;
    }
  }
}

type ModelViewerProps = {
  poster: string;
  glb: string;
  reality: string;
  alt?: string;
  scale?: number;
  height?: string;
};

/**
 * NOTE: model-viewerはこの層で隠蔽してください
 */
const ModelViewer = ({
  glb,
  reality,
  poster,
  alt = '',
  scale = 1,
  height = '80vh',
}: ModelViewerProps) => {
  const containerStyles = css`
    width: 100%;
    & model-viewer {
      width: 100%;
      height: ${height};
    }
  `;

  return (
    <div css={containerStyles}>
      <model-viewer
        src={glb}
        ios-src={reality}
        poster={poster}
        alt={alt}
        shadow-intensity="1"
        camera-controls
        ar
        scale={`${scale} ${scale} ${scale}`}
      />
    </div>
  );
};

export default ModelViewer;
