import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/features/ui/Button';
import { getRoutes } from '@/routes/getRoutes';

const BackToTopButton = () => {
  const routes = getRoutes();
  const navigate = useNavigate();
  const onButtonClick = useCallback(() => {
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path]);
  return <Button onClick={onButtonClick}>トップへ戻る</Button>;
};

export default BackToTopButton;
