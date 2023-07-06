import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { DEFAULT_ERROR_MESSAGE } from '@/features/errorHandling';
import { getRoutes } from '@/routes/getRoutes';

import { FallbackDisplayProps } from './FallbackDisplay.types';

const FallbackDisplay = (props?: FallbackDisplayProps) => {
  const hasProps = Object.keys(props ?? {}).length > 0;
  const { title, subtitle, contentRows } = props ?? {};

  const navigate = useNavigate();
  const handleClickReturnToTop = useCallback(() => {
    const routes = getRoutes();
    navigate(routes.index.path);
  }, [navigate]);

  return (
    <>
      <h1>{title ?? DEFAULT_ERROR_MESSAGE.title}</h1>
      <h2>{subtitle ?? DEFAULT_ERROR_MESSAGE.subtitle}</h2>
      {(contentRows ?? DEFAULT_ERROR_MESSAGE.contentRows).map(
        (content, index) => {
          const key = content.slice(0, 2).concat(index.toString());
          return <p key={key}>{content}</p>;
        }
      )}
      {!hasProps && (
        <button type="button" onClick={handleClickReturnToTop}>
          トップに戻る
        </button>
      )}
    </>
  );
};

export default FallbackDisplay;
