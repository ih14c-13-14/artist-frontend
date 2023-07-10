import merge from 'lodash/merge';

// TODO: 型定義
/**
 * # mergeObjects
 *
 * ## 概要
 * - 任意の数のオブジェクトを引数として受け取り、マージしたオブジェクトを生成して返す
 * - 引数に対して破壊的な変更は加えない
 */
const mergeObjects = (...source: unknown[]) => merge({}, ...source);
export default mergeObjects;
