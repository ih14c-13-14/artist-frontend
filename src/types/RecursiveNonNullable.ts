/**
 * スキーマ治るまでの暫定対応
 * @deprecated DO NOT USE THIS
 */
type RecursiveNonNullable<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
} extends infer U
  ? U extends ReadonlyArray<infer V>
    ? ReadonlyArray<RecursiveNonNullable<V>>
    : U extends object
    ? {
        [P in keyof U]: RecursiveNonNullable<U[P]>;
      }
    : U
  : never;

export default RecursiveNonNullable;
