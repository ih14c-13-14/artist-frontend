import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout/Layout.component';
import { Index } from '@/pages/Index';
import { Login } from '@/pages/Login';
import { MapShow } from '@/pages/MapShow';
import { NotFound } from '@/pages/NotFound';
import { PasswordChange } from '@/pages/PasswordChange';
import { PasswordChangeDone } from '@/pages/PasswordChangeDone';
import { PasswordForget } from '@/pages/PasswordForget';
import { PasswordReset } from '@/pages/PasswordReset';
import { PasswordResetDone } from '@/pages/PasswordResetDone';
import { QrRead } from '@/pages/QrRead';
import { Search } from '@/pages/Search';
import { Signup } from '@/pages/Signup';
import { SignupConfirm } from '@/pages/SignupConfirm';
import { SignupDone } from '@/pages/SignupDone';

import { getRoutes } from './getRoutes';

export const RouterConfig = () => {
  const routes = getRoutes();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.index.path} element={<Layout />}>
          <Route path={routes.index.path} element={<Index />} />
          <Route path={routes.others.path} element={<NotFound />} />
          <Route path={routes.mapShow.path} element={<MapShow />} />
          <Route path={routes.serach.path} element={<Search />} />
          <Route path={routes.qrRead.path} element={<QrRead />} />
          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.signup.path} element={<Signup />} />
          <Route path={routes.signupConfirm.path} element={<SignupConfirm />} />
          <Route path={routes.signupDone.path} element={<SignupDone />} />
          <Route
            path={routes.passwordForget.path}
            element={<PasswordForget />}
          />
          <Route path={routes.passwordReset.path} element={<PasswordReset />} />
          <Route
            path={routes.passwordResetDone.path}
            element={<PasswordResetDone />}
          />
          <Route
            path={routes.passwordChange.path}
            element={<PasswordChange />}
          />
          <Route
            path={routes.passwordChangeDone.path}
            element={<PasswordChangeDone />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
