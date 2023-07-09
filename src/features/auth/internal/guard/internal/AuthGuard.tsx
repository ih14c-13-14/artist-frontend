import { useLocation, useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';

import GuardBase from './GuardBase';
import { isAuthenticated } from './utils';

/**
 * サインイン時のみ表示できる画面で使用
 */
const AuthGuard = () => {
  const routes = getRoutes();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  return (
    <GuardBase
      guardPredicate={isAuthenticated}
      onRejected={() =>
        navigate(routes.signIn.path, { state: { from: currentPath } })
      }
    />
  );
};

export default AuthGuard;
