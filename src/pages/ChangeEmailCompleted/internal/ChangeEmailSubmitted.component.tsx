import { BackToTopButton } from '@/features/navigate/BackToTopButton';
import { useInvalidDirectAccess } from '@/features/navigate/hooks/useInvalidDirectAccess';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import styles from './ChangeEmailSubmitted.module.scss';

const DEV_EMAIL = 'mail@example.com';

const ChangeEmailSubmitted = () => {
  useInvalidDirectAccess();

  return (
    <FormPageSection type="h1" title="メールアドレス変更手続き開始">
      <Stack gap="24px" width="100%" alignItems="center">
        <p className={styles.description}>
          {`新たに設定されたメールアドレスへ、確認メールを送信しました。届いていない場合は、迷惑メールを確認していただくか、${DEV_EMAIL}からの受信設定を許可にしてください。`}
        </p>
        <BackToTopButton />
      </Stack>
    </FormPageSection>
  );
};

export default ChangeEmailSubmitted;
