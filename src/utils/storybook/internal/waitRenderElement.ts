export const waitRenderElement = (querySelect: string) => (): Promise<void> => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const element = document.querySelector(querySelect);
      if (element) {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
};

export default waitRenderElement;
