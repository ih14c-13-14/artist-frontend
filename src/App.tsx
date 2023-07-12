import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout, MapLayout } from '@/features/Layout';
import { AuthGuard, GuestGuard, useCheckAuthOrGuest } from '@/features/auth';
import { FallbackDisplay } from '@/features/errorHandling';
import { ErrorBoundary } from '@/features/errorHandling';
import { ChangeEmail } from '@/pages/ChangeEmail';
import { ChangeEmailSubmitted } from '@/pages/ChangeEmailCompleted';
import { ChangeMisc } from '@/pages/ChangeMisc';
import { ChangeMiscCompleted } from '@/pages/ChangeMiscCompleted';
import { ChangePassword } from '@/pages/ChangePassword';
import { MapShow } from '@/pages/MapShow';
import { PasswordForget } from '@/pages/PasswordForget';
import { PasswordReset } from '@/pages/PasswordReset';
import { PasswordResetDone } from '@/pages/PasswordResetDone';
import { QrRead } from '@/pages/QrRead';
import { Search } from '@/pages/Search';
import { Settings } from '@/pages/Settings';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { SignUpCompleted } from '@/pages/SignUpCompleted';
import { getRoutes } from '@/routes/getRoutes';

function App() {
  const routes = getRoutes();
  const { isLoggedIn: _isLoggedIn } = useCheckAuthOrGuest({});
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<AuthGuard />}>
            <Route element={<MapLayout />}>
              <Route path={routes.mapShow.path} element={<MapShow />} />
            </Route>
            <Route element={<Layout hasFooter={true} />}>
              <Route path={routes.search.path} element={<Search />} />
              <Route path={routes.qrRead.path} element={<QrRead />} />
            </Route>
            <Route element={<Layout />}>
              <Route
                path={routes.signUpCompleted.path}
                element={<SignUpCompleted />}
              />
              <Route
                path={routes.changeMiscCompleted.path}
                element={<ChangeMiscCompleted />}
              />
              <Route path={routes.settings.path} element={<Settings />} />
              <Route path={routes.changeEmail.path} element={<ChangeEmail />} />
              <Route path={routes.changeMisc.path} element={<ChangeMisc />} />
              <Route
                path={routes.changePassword.path}
                element={<ChangePassword />}
              />
              <Route
                path={routes.changeEmailSubmitted.path}
                element={<ChangeEmailSubmitted />}
              />
              <Route path="/*" element={<FallbackDisplay />} />
            </Route>
          </Route>
          <Route path="/" element={<GuestGuard />}>
            <Route element={<Layout />}>
              <Route path={routes.signIn.path} element={<SignIn />} />
              <Route path={routes.signUp.path} element={<SignUp />} />
              <Route
                path={routes.passwordForget.path}
                element={<PasswordForget />}
              />
              <Route
                path={routes.passwordReset.path}
                element={<PasswordReset />}
              />
              <Route
                path={routes.passwordResetDone.path}
                element={<PasswordResetDone />}
              />
              <Route path="/*" element={<FallbackDisplay />} />
            </Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
