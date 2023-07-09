import clsx from 'clsx';
import type { ReactNode } from 'react';
import { useMemo, forwardRef, useCallback } from 'react';

import { Stack } from '@/features/ui/Stack';

import styles from './Radio.module.scss';
import {
  ChangeEventType,
  InputBasePropsWithoutLabel,
} from '../../commons/types';

export type RadioProps = Omit<InputBasePropsWithoutLabel, 'onBlur'> & {
  choiceLabel: ReactNode;
  onChangeValue?: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: (event: { target: any; type?: any }) => void;
  dataTestId?: string;
};

/**
 * 単一 radio
 * onBlurはフォーカスが外れたタイミングで発火します
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { choiceLabel, onChange, onChangeValue, dataTestId, ...inputProps } =
    props;

  const spanClassName = useMemo(() => clsx(styles.circle), []);

  const refCallback = useCallback(
    (node: HTMLInputElement) => {
      props.onBlur?.({ target: node });
    },
    [props]
  );

  return (
    <div className={styles.container}>
      <label>
        <Stack gap="8px" direction="row" alignItems="center">
          <input
            ref={node => {
              if (!node || !ref || 'current' in ref) return;
              ref(node);
              // HACK: 'onBlur'はブラウザによって差異が発生するため、ここで呼ぶ
              // 主に、webkit系ブラウザで壊れる
              refCallback(node);
            }}
            type="radio"
            onChange={(e: ChangeEventType) => {
              onChange?.(e);
              onChangeValue?.(e.target.value);
            }}
            data-testid={dataTestId}
            {...inputProps}
          />
          <div className={styles.circleContainer}>
            <span className={spanClassName} />
          </div>
          {choiceLabel}
        </Stack>
      </label>
    </div>
  );
});

export default Radio;
