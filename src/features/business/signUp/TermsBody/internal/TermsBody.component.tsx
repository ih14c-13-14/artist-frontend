import { memo } from 'react';

import { TermsAgreement } from './TermsBody.constants';
import styles from './TermsBody.module.scss';
import { useDetectScrolledToBottom } from './hooks/useDetectScrolledToBottom';

export type TermsBodyProps = {
  setIsTermsScrolled: (isTermsScrolled: boolean) => void;
};

export const TermsBody = memo(({ setIsTermsScrolled }: TermsBodyProps) => {
  const { inViewRef } = useDetectScrolledToBottom({
    setIsScrolledToBottom: setIsTermsScrolled,
  });

  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{
          __html: TermsAgreement,
        }}
        className={styles.termsBody}
      />
      {/* NOTE: 最下部までスクロールされたか検知するための要素 */}
      <div ref={inViewRef} />
    </div>
  );
});

export default TermsBody;
