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
    signin: {
      path: '/signin/',
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
  } as const satisfies {
    [key: string]: {
      path: string;
    };
  };
};