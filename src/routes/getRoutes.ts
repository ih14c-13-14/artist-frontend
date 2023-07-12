export type Path = `/${string}/`;

export const getRoutes = () => {
  return {
    mapShow: {
      path: '/map/show/',
    },
    detailFromMap: {
      path: ({ workId = ':work_id' }) => `/map/${workId}/`,
    },
    search: {
      path: '/search/',
    },
    detailFromSearch: {
      path: ({ workId = ':work_id' }) => `/search/${workId}/`,
    },
    qrRead: {
      path: '/qr/read/',
    },
    detailFromQr: {
      path: ({ workId = ':work_id' }) => `/qr/${workId}/`,
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
    changeEmailSubmitted: {
      path: '/settings/change-email/submitted/',
    },
    changePassword: {
      path: '/settings/change-password/',
    },
    changeMisc: {
      path: '/settings/change-misc/',
    },
  } as const satisfies Record<
    string,
    { path: Path | ((args: Record<string, string>) => Path) }
  >;
};
