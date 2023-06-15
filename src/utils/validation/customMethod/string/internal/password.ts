import * as yup from 'yup';

const addPassword = () => {
  yup.addMethod(yup.StringSchema, 'password', function () {
    return this.minAndMax({ min: 8, max: 128 })
      .usableLetters({
        isUsableHalfWidthDigit: true,
        isUsableHalfWidthAlphabet: true,
        isUsableSymbol: true,
      })
      .requiredLetters({
        shouldIncludeLowerAlphabet: true,
        shouldIncludeUpperAlphabet: true,
        shouldIncludeDigit: true,
      });
  });
};

export default addPassword;
