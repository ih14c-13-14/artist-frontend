import clsx from 'clsx';
import type { CSSProperties } from 'react';

import styles from './Spacer.module.scss';
import type { SpacerProps } from './Spacer.types';

/**
 * direction = VERTICALの場合、margin top/bottomと同じような使い方になります。
 */
const Spacer = ({ size, direction = 'VERTICAL' }: SpacerProps) => {
  const sizeStyle: CSSProperties =
    direction === 'HORIZONTAL' ? { width: size } : { height: size };
  return (
    <>
      <div
        className={clsx(styles.spacer, styles[direction.toLowerCase()])}
        style={sizeStyle}
      />
    </>
  );
};

export default Spacer;
