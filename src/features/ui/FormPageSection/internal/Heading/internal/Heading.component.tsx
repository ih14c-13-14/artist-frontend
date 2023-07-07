import clsx from 'clsx';
import { useMemo, createElement } from 'react';

import ExtractStrict from '@/types/ExtractStrict';

import styles from './Heading.module.scss';
import { HeadingProps } from './Heading.types';

const Heading = ({
  type,
  children,
  className,
}: HeadingProps<ExtractStrict<keyof JSX.IntrinsicElements, 'h1' | 'h2'>>) => {
  const elementClassName = useMemo(() => {
    return clsx(styles.headingRoot, className);
  }, [className]);
  return createElement(type, { className: elementClassName }, children);
};

export default Heading;
