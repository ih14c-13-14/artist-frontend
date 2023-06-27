export const getRoutes = () => {
  return {
    index: {
      path: '/',
    },
    mapShow: {
      path: '/map/show/',
    },
    serach: {
      path: '/search/',
    },
    qrRead: {
      path: '/qr/read/',
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
  } as const satisfies {
    [key: string]: {
      path: string;
    };
  };
};
