import { UAParser } from 'ua-parser-js';
import { OS_NAMES, SUPPORTED } from './getARCompatibility.constants';

/**
 * TODO: #46|対応環境もうちょっとまともに洗い出す
 */
export const getARCompatibility = () => {
  const userAgent = navigator.userAgent;
  const parser = new UAParser(userAgent);
  const { name: osName, version } = parser.getOS();
  const osVersion = version ?? '0';

  const isSupported = (() => {
    if (osName === OS_NAMES.IOS) {
      const version = parseFloat(osVersion);
      return version >= SUPPORTED.IOS.minVer;
    } else if (osName === OS_NAMES.ANDROID) {
      const version = parseFloat(osVersion);
      return version >= SUPPORTED.ANDROID.minVer;
    } else {
      return false;
    }
  })();

  return {
    osName: osName ?? OS_NAMES.OTHERS,
    isSupported,
  } as const;
};
