import clsx from 'clsx';

import styles from './Divider.module.scss';

type Props = {
  orientation?: 'HORIZONTAL' | 'VERTICAL';
};

const Divider = ({ orientation = 'HORIZONTAL' }: Props) => {
  return (
    <hr
      className={clsx(
        styles.divider,
        orientation === 'HORIZONTAL' ? styles.horizontal : styles.vertical
      )}
    />
  );
};

export default Divider;
