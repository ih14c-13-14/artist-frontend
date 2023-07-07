import type * as yup from 'yup';
import type { AnyObject, Maybe } from 'yup/lib/types';

export interface CustomStringSchema<
  TType extends Maybe<string> = string | undefined,
  TContext extends AnyObject = AnyObject,
  TOut extends TType = TType,
> extends yup.BaseSchema<TType, TContext, TOut> {
  minAndMax({
    min,
    max,
    message,
  }: {
    min: number;
    max: number;
    message?: string;
  }): this;
  usableLetters({
    isUsableHalfWidthDigit,
    isUsableHalfWidthAlphabet,
    isUsableSymbol,
    usableSymbolRegex,
    message,
  }: {
    isUsableHalfWidthDigit: boolean;
    isUsableHalfWidthAlphabet: boolean;
    isUsableSymbol: boolean;
    usableSymbolRegex?: RegExp;
    message?: string;
  }): this;
  requiredLetters({
    shouldIncludeLowerAlphabet,
    shouldIncludeUpperAlphabet,
    shouldIncludeDigit,
    usableRegex,
    message,
  }: {
    shouldIncludeLowerAlphabet: boolean;
    shouldIncludeUpperAlphabet: boolean;
    shouldIncludeDigit: boolean;
    usableRegex?: RegExp;
    message?: string;
  }): this;
  password(): this;
}
