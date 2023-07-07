import styles from './Button.module.scss';
import { VariantKey } from './Button.types';

export const valiantClassNames: Record<VariantKey, string> = {
  CONTAINED: styles.containedButton,
  OUTLINED: styles.outlinedButton,
  PLAIN: styles.plainButton,
};
