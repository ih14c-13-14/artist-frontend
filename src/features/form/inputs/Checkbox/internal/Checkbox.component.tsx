import { forwardRef, useCallback } from 'react';

import { ChangeEventType } from '@/features/form/inputs/commons/types';

import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { choiceLabel, onChange, onChangeValue, dataTestid, ...inputProps } =
    props;

  const refCallback = useCallback(
    (node: HTMLInputElement) => {
      props.onBlur?.({ target: node });
    },
    [props]
  );

  return (
    <>
      <label className={styles.container}>
        <input
          ref={node => {
            if (!node || !ref || 'current' in ref) return;
            ref(node);
            // HACK: 'onBlur'はブラウザによって差異が発生するため、ここで呼ぶ
            // 主に、webkit系ブラウザで壊れる
            refCallback(node);
          }}
          type="checkbox"
          data-testid={dataTestid}
          onChange={(e: ChangeEventType) => {
            onChange?.(e);
            onChangeValue?.(e.target.value);
          }}
          {...inputProps}
        />
        <span>{choiceLabel}</span>
      </label>
    </>
  );
});

export default Checkbox;
