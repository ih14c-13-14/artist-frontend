const getConfig = () => ({
  api: {
    url: (defaultUrl: string): string => {
      // 改行やスペースを取り除く
      return (
        document
          .querySelector('#api-base-url')
          ?.textContent?.replace(/\s+/g, '') ?? defaultUrl
      );
    },
  },
});

export default getConfig;
