export const waitRenderText = (text: string) => (): Promise<void> => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const element = document.evaluate(
        `//*[contains(text(), "${text}")]`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (element) {
        setTimeout(() => {
          clearInterval(interval);
          resolve();
        }, 100);
      }
    }, 50);
  });
};

export default waitRenderText;
