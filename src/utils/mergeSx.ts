import type { SxProps, Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

import mergeObject from './mergeObjects';

/**
 * # mergeSx
 *
 * ## 概要
 * - 任意の数のSxPropsを引数として受け取り、マージして返す関数
 * - プロパティが重複した場合、後から渡された引数によって上書きされる
 * - 引数に対して破壊的な変更は加えない
 */
const mergeSx =
  (
    ...source: Array<SxProps<Theme> | null | undefined>
  ): ((theme: Theme) => SystemStyleObject<Theme>) =>
  (theme: Theme) =>
    mergeObject(
      {},
      ...source.map(sx => (typeof sx === 'function' ? sx(theme) : sx))
    );
export default mergeSx;
