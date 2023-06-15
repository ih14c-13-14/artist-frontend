const extractSymbolsFromRegex = (regex: RegExp, hasSlash = true): string => {
  const splittedRegex = regex.toString().split('/^[')[1].split(']*$/')[0];
  return hasSlash ? splittedRegex : splittedRegex.replaceAll('\\', '');
};

export default extractSymbolsFromRegex;
