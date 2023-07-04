/**
 * width, heightに渡せる値の型
 */
type Length =
  | `${number}${'px' | 'vw' | 'vh' | '%'}`
  | `calc(${string})`
  | 'auto'
  | 'fit-content';

export default Length;
