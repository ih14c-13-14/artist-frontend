import clsx from 'clsx';

import styles from './Divider.module.scss';
import { DividerProps } from './Divider.types';

const Divider = ({ className }: DividerProps) => {
  return <hr className={clsx(styles.divider, className)} />;
};

export default Divider;
