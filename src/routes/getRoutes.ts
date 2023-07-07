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
    signIn: {
      path: '/sign-in/',
    },
    signUp: {
      path: '/sign-up/',
    },
    SignUpConfirm: {
      path: '/sign-up/confirm/',
    },
    signUpDone: {
      path: '/sign-up/done/',
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
