import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout, MapLayout } from '@/features/Layout';
import { FallbackDisplay } from '@/features/errorHandling';
import { MapShow } from '@/pages/MapShow';
import { PasswordChange } from '@/pages/PasswordChange';
import { PasswordChangeDone } from '@/pages/PasswordChangeDone';
import { PasswordForget } from '@/pages/PasswordForget';
import { PasswordReset } from '@/pages/PasswordReset';
import { PasswordResetDone } from '@/pages/PasswordResetDone';
import { QrRead } from '@/pages/QrRead';
import { Search } from '@/pages/Search';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { SignUpConfirm } from '@/pages/SignUpConfirm';
import { SignUpDone } from '@/pages/SignUpDone';
import { getRoutes } from '@/routes/getRoutes';

import { AuthProvider } from './features/auth';
import { ErrorBoundary } from './features/errorHandling';

function App() {
  const routes = getRoutes();

  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route element={<MapLayout />}>
              <Route path={routes.mapShow.path} element={<MapShow />} />
            </Route>
            <Route element={<Layout hasHeader={true} hasFooter={true} />}>
              <Route path={routes.serach.path} element={<Search />} />
              <Route path={routes.qrRead.path} element={<QrRead />} />
            </Route>
            <Route element={<Layout hasHeader={true} />}>
              <Route path={routes.signIn.path} element={<SignIn />} />
              <Route path={routes.signUp.path} element={<SignUp />} />
              <Route
                path={routes.SignUpConfirm.path}
                element={<SignUpConfirm />}
              />
              <Route path={routes.signUpDone.path} element={<SignUpDone />} />
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
              <Route
                path={routes.passwordChange.path}
                element={<PasswordChange />}
              />
              <Route
                path={routes.passwordChangeDone.path}
                element={<PasswordChangeDone />}
              />
              <Route path="/*" element={<FallbackDisplay />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
