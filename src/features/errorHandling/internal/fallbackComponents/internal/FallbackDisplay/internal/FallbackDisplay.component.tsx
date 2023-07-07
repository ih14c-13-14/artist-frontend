import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { DEFAULT_ERROR_MESSAGE } from '@/features/errorHandling';
import { Button } from '@/features/ui/Button';
import { Spacer } from '@/features/ui/Spacer';
import { getRoutes } from '@/routes/getRoutes';

import styles from './FallbackDisplay.module.scss';
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
    <div className={styles.errorDisplayContainer}>
      <h1 className={styles.title}>{title ?? DEFAULT_ERROR_MESSAGE.title}</h1>
      <Spacer size="4px" />
      <h2 className={styles.subTitle}>
        {subtitle ?? DEFAULT_ERROR_MESSAGE.subtitle}
      </h2>
      <Spacer size="40px" />
      {(contentRows ?? DEFAULT_ERROR_MESSAGE.contentRows).map(
        (content, index) => {
          const key = content.slice(0, 2).concat(index.toString());
          return <p key={key}>{content}</p>;
        }
      )}
      {!hasProps && (
        <>
          <Spacer size="24px"></Spacer>
          <Button onClick={handleClickReturnToTop}>トップに戻る</Button>
        </>
      )}
    </div>
  );
};

export default FallbackDisplay;
