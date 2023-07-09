import { Outlet } from 'react-router-dom';

import { UseGuardProps, useGuard } from '../../../hooks/useGuard';

/**
 * 認証関連のガード
 *
 * - ガードをパスする場合、子ルートを定義する
 * - ガードをパスしない場合、 onRejected コールバックを実行する
 *
 * @see UseGuardProps.onRejected
 */
const GuardBase = (props: UseGuardProps) => {
  const { guardPassed } = useGuard(props);

  return guardPassed ? <Outlet /> : null;
};

export default GuardBase;
