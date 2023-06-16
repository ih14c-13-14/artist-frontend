import * as yup from 'yup';

import jpConfig from './config/locale/jp.locale';
import addStringValidator from './customMethod/string/addStringValidator';

export { yupResolver as resolver } from '@hookform/resolvers/yup'; // eslint-disable-line @typescript-eslint/no-restricted-imports

yup.setLocale(jpConfig);

addStringValidator();

export default yup;
