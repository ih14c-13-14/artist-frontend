export const getRoutes = () => {
  return {
    index: {
      path: '/',
    },
    mapShow: {
      path: '/map/show/',
    },
    search: {
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
    signUpCompleted: {
      path: '/sign-up/completed/',
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
    settings: {
      path: '/settings/',
    },
    settingsUpdate: {
      path: '/settings/misc/',
    },
    changeEmail: {
      path: '/settings/change-email/',
    },
    changePassword: {
      path: '/settings/change-password/',
    },
    changeMisc: {
      path: '/settings/change-misc/',
    },
  } as const satisfies {
    [key: string]: {
      path: string;
    };
  };
};
