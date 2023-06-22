import * as yup from 'yup';
import type { Maybe, Message } from 'yup';

import extractSymbolsFromRegex from '@/utils/extractSymbolsFromRegex';
import isNil from '@/utils/isNil';

const LOWER_ALPHABET_LABEL = '小文字英字(半角)';
const UPPER_ALPHABET_LABEL = '大文字英字(半角)';
const INTEGER_LABEL = '数字(半角)';

const addRequiredLetters = () => {
  yup.addMethod(
    yup.StringSchema,
    'requiredLetters',
    function ({
      shouldIncludeLowerAlphabet,
      shouldIncludeUpperAlphabet,
      shouldIncludeDigit,
      usableRegex = /^[a-zA-Z0-9!@#$%^&*()<>[\]{}|_+\-=]*$/,
      message = params => {
        const requiredLettersLabels: Array<string> = [];
        params.shouldIncludeLowerAlphabet &&
          requiredLettersLabels.push(LOWER_ALPHABET_LABEL);
        params.shouldIncludeUpperAlphabet &&
          requiredLettersLabels.push(UPPER_ALPHABET_LABEL);
        params.shouldIncludeDigit && requiredLettersLabels.push(INTEGER_LABEL);
        const requiredLettersLabel = requiredLettersLabels.join('、');
        return `${requiredLettersLabel} を含める必要があります。`;
      },
    }: {
      shouldIncludeLowerAlphabet: boolean;
      shouldIncludeUpperAlphabet: boolean;
      shouldIncludeDigit: boolean;
      usableRegex?: RegExp;
      message?: Message<{
        shouldIncludeLowerAlphabet: boolean;
        shouldIncludeUpperAlphabet: boolean;
        shouldIncludeDigit: boolean;
      }>;
    }) {
      return this.test({
        name: 'requiredLetters',
        message,
        params: {
          shouldIncludeLowerAlphabet,
          shouldIncludeUpperAlphabet,
          shouldIncludeDigit,
          usableRegex,
        },
        test: (value: Maybe<string>) => {
          const regexString = extractSymbolsFromRegex(usableRegex);
          const generatedRegexString =
            '^' +
            (shouldIncludeLowerAlphabet ? '(?=.*[a-z])' : '') +
            (shouldIncludeUpperAlphabet ? '(?=.*[A-Z])' : '') +
            (shouldIncludeDigit ? '(?=.*[0-9])' : '') +
            '[' +
            regexString +
            ']*$';
          const generatedRegex = new RegExp(generatedRegexString);
          return !isNil(value) && generatedRegex.test(value);
        },
      });
    }
  );
};

export default addRequiredLetters;
