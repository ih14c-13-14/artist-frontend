import isNil from '@/utils/isNil';
import * as yup from 'yup';
import type { Maybe, Message } from 'yup';

const addMinAndMax = () => {
  yup.addMethod(
    yup.StringSchema,
    'minAndMax',
    function ({
      min,
      max,
      message = params => {
        return `${params.min} 文字以上${params.max} 文字以下である必要があります。`;
      },
    }: {
      min: number;
      max: number;
      message?: Message<{ min: number; max: number }>;
    }) {
      return this.test({
        message,
        name: 'minAndMax',
        exclusive: true,
        params: { min, max },
        test(value: Maybe<string>) {
          if (isNil(value) || isNil(value.length)) return false;
          return (
            value.length >= this.resolve(min) &&
            value.length <= this.resolve(max)
          );
        },
      });
    }
  );
};

export default addMinAndMax;
