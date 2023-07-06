import type { AccessErrorMessageType } from './types';

export const DEFAULT_ERROR_MESSAGE = {
  title: '404',
  subtitle: 'ページが見つかりません',
  contentRows: [
    'お探しのページは見つかりませんでした。',
    'ご指定いただいたアドレスが間違っているか、',
    'ページが移動または削除された可能性があります。',
  ],
} as const satisfies AccessErrorMessageType;
