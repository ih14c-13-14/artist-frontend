import clsx from 'clsx';
import { useMemo } from 'react';

import ExtractStrict from '@/types/ExtractStrict';
import isNil from '@/utils/isNil';

import styles from './FormPageSection.module.scss';
import { FormPageSectionProps } from './FormPageSection.types';
import { Heading, HeadingProps } from '../../Heading';

const FormPageSection = <
  T extends HeadingProps<
    ExtractStrict<keyof JSX.IntrinsicElements, 'h1' | 'h2'>
  >['type'],
>(
  props: FormPageSectionProps<T>
) => {
  const { type, title, children } = props;
  const descriptionTop = useMemo(() => {
    if (type === 'h1') return props.descriptionTop;
    return undefined;
  }, [props.descriptionTop, type]);

  return (
    <section className={clsx(styles.sectionRoot, styles[type])}>
      <Heading type={type}>{title}</Heading>
      {!isNil(descriptionTop) && type === 'h1' && (
        <p className={styles.descriptionTop}>{descriptionTop}</p>
      )}
      <div className={styles.sectionInnerContainer}>{children}</div>
    </section>
  );
};

export default FormPageSection;
