const getConfig = () => ({
  api: {
    url: (defaultUrl: string): string => {
      return document.querySelector('#api-base-url')?.textContent ?? defaultUrl;
    },
  },
});

export default getConfig;
