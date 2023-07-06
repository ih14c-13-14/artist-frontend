import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout/Layout.component';
import { FallbackDisplay } from '@/features/errorHandling';
import { MapShow } from '@/pages/MapShow';
import { PasswordChange } from '@/pages/PasswordChange';
import { PasswordChangeDone } from '@/pages/PasswordChangeDone';
import { PasswordForget } from '@/pages/PasswordForget';
import { PasswordReset } from '@/pages/PasswordReset';
import { PasswordResetDone } from '@/pages/PasswordResetDone';
import { QrRead } from '@/pages/QrRead';
import { Search } from '@/pages/Search';
import { Signin } from '@/pages/Signin';
import { Signup } from '@/pages/Signup';
import { SignupConfirm } from '@/pages/SignupConfirm';
import { SignupDone } from '@/pages/SignupDone';
import { getRoutes } from '@/routes/getRoutes';

import { ErrorBoundary } from './features/errorHandling';

function App() {
  const routes = getRoutes();

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route
            path={routes.index.path}
            element={<Layout hasHeader={true} hasFooter={true} />}
          >
            <Route path={routes.mapShow.path} element={<MapShow />} />
            <Route path={routes.serach.path} element={<Search />} />
            <Route path={routes.qrRead.path} element={<QrRead />} />
          </Route>
          <Route path={routes.index.path} element={<Layout hasHeader={true} />}>
            <Route path={routes.signin.path} element={<Signin />} />
            <Route path={routes.signup.path} element={<Signup />} />
            <Route
              path={routes.signupConfirm.path}
              element={<SignupConfirm />}
            />
            <Route path={routes.signupDone.path} element={<SignupDone />} />
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
  );
}

export default App;
