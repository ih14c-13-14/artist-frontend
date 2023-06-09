export const getRoutes = () => {
  return {
    mapShow: {
      path: '/map/show/',
    },
    serach: {
      path: '/search/',
    },
    qrRead: {
      path: '/qr/read/',
    },
    stampRefer: {
      path: '/stamp/refer/',
    },
    login: {
      path: '/login/',
    },
    signup: {
      path: '/signup/',
    },
    signupConfirm: {
      path: '/signup/confirm/',
    },
    signupDone: {
      path: '/signup/done/',
    },
    passwordForget: {
      path: '/password/forget/',
    },
    passwordReset: {
      path: '/password/reset/',
    },
    passwordResetDone: {
      path: '/password/reset/done/',
    },
    passwordChange: {
      path: '/password/change/',
    },
    passwordChangeDone: {
      path: '/password/change/done/',
    },
    others: {
      path: '/*',
    },
  };
};
