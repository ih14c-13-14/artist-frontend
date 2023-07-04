/**
 * styleのパターン
 *
 * width, height, padding等、様々なプロパティに関して用いる
 */
export const SIZE = ['SMALL', 'MEDIUM', 'LARGE'] as const;

export type Size = (typeof SIZE)[number];
