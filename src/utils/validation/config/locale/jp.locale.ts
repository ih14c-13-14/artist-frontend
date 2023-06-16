import type { LocaleObject } from 'yup';

const jpConfig: LocaleObject = {
  mixed: {
    required: () => '必須',
  },
  string: {
    length: ({ length }) => `${length}文字である必要があります。`,
    min: ({ min }) => `${min} 文字以上である必要があります。`,
    max: ({ max }) => `${max} 文字以下である必要があります。`,
    matches: ({ regex }) => `次の形式と一致する必要があります: ${regex}`,
    email: () => '正しいメールアドレスを入力してください。',
    url: () => '有効なURLである必要があります。',
    trim: () => '前後にスペースを入れてはいけません。',
    lowercase: () => '小文字である必要があります。',
    uppercase: () => '大文字である必要があります。',
  },
};

export default jpConfig;
