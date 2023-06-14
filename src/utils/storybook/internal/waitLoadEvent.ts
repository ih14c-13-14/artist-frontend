export const waitLoadEvent = (iframeElement: Element) => (): Promise<void> => {
  return new Promise(resolve => {
    iframeElement.addEventListener('load', () => {
      setTimeout(() => {
        resolve();
      }, 50);
    });
  });
};

export default waitLoadEvent;
