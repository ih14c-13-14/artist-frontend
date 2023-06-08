import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';
import { ShowMap } from '@/pages/ShowMap';
import { Search } from '@/pages/Search';
import { ReadQR } from '@/pages/ReadQR';
import { ReferStamps } from '@/pages/ReferStamps';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { SignupCofirm } from '@/pages/SignupConfirm';
import { PasswordForgot } from '@/pages/PasswordForgot';
import { PasswordReset } from '@/pages/PasswordReset';
import { PasswordChanged } from '@/pages/PasswordChanged';

export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/showmap" element={<ShowMap />} />
          <Route path="/search" element={<Search />} />
          <Route path="/readqr" element={<ReadQR />} />
          <Route path="/stamp" element={<ReferStamps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupconfirm" element={<SignupCofirm />} />
          <Route path="/forgetpassword" element={<PasswordForgot />} />
          <Route path="/resetpassword" element={<PasswordReset />} />
          <Route path="/passwordchanged" element={<PasswordChanged />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
