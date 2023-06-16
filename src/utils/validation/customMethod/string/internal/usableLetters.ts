import * as yup from 'yup';
import type { Maybe, Message } from 'yup';

import isNil from '@/utils/isNil';
import extractSymbolsFromRegex from '@/utils/extractSymbolsFromRegex';

const NUMBER_REGEX = '0-9';
const ALPHABET_REGEX = 'a-zA-Z';

const addUsableLetters = () => {
  yup.addMethod(
    yup.StringSchema,
    'usableLetters',
    function ({
      isUsableHalfWidthDigit,
      isUsableHalfWidthAlphabet,
      isUsableSymbol,
      usableSymbolRegex = /^[!@#$%^&*()<>[\]{}|_+\-=]*$/,
      message = params => {
        const regexString = extractSymbolsFromRegex(usableSymbolRegex, false);
        const usableHalfWidthLabel =
          !params.isUsableHalfWidthAlphabet && !params.isUsableHalfWidthDigit
            ? ''
            : '半角' +
              (params.isUsableHalfWidthAlphabet ? '英' : '') +
              (params.isUsableHalfWidthDigit ? '数' : '') +
              '字';
        const usableSymbolLabel = params.isUsableSymbol
          ? `記号 ${regexString}`
          : '';
        const usableLetterLabel =
          usableHalfWidthLabel +
          (usableHalfWidthLabel && usableSymbolLabel ? 'または' : '') +
          usableSymbolLabel;

        return `使用可能な文字は${usableLetterLabel} です。`;
      },
    }: {
      isUsableHalfWidthDigit: boolean;
      isUsableHalfWidthAlphabet: boolean;
      isUsableSymbol: boolean;
      usableSymbolRegex?: RegExp;
      message?: Message<{
        isUsableHalfWidthDigit: boolean;
        isUsableHalfWidthAlphabet: boolean;
        isUsableSymbol: boolean;
        usableSymbolRegex: RegExp;
      }>;
    }) {
      return this.test({
        name: 'usableLetters',
        message,
        params: {
          isUsableHalfWidthDigit,
          isUsableHalfWidthAlphabet,
          isUsableSymbol,
          usableSymbolRegex,
        },
        test: (value: Maybe<string>) => {
          const regexString = extractSymbolsFromRegex(usableSymbolRegex);
          const stringForSearching =
            '^[' +
            (isUsableHalfWidthDigit ? NUMBER_REGEX : '') +
            (isUsableHalfWidthAlphabet ? ALPHABET_REGEX : '') +
            regexString +
            ']*$';
          const generatedRegex = new RegExp(stringForSearching);
          return (
            isNil(value) || value === '' || value.search(generatedRegex) !== -1
          );
        },
      });
    }
  );
};

export default addUsableLetters;
