import type { PropsWithChildren, CSSProperties } from 'react';
import { createElement } from 'react';

type SkeletonProps = PropsWithChildren<{
  type: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
}>;

/**
 * storyにおいてchildren等のpropsがどのようなレイアウトで表示されるのかを視認しやすくするために使用する
 */
const Skeleton = ({ type, children, style }: SkeletonProps) => {
  const { backgroundColor = 'rgb(248,71,133,0.5)', ...rest } = style || {};
  return createElement(
    type,
    {
      style: {
        backgroundColor,
        ...rest,
      },
    },
    children ?? `dummy ${type} element`
  );
};

export default Skeleton;
