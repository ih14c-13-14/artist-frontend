import { useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';

import GuardBase from './GuardBase';
import { isGuest } from './utils';

/**
 * 非ログイン時のみ表示できる画面で使用
 */
const GuestGuard = () => {
  const routes = getRoutes();
  const navigate = useNavigate();

  return (
    <GuardBase
      guardPredicate={isGuest}
      onRejected={() => navigate(routes.mapShow.path)}
    />
  );
};

export default GuestGuard;
