import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { useChangeEmailSubmitted } from './ChangeEmailSubmitted.hooks';
import styles from './ChangeEmailSubmitted.module.scss';

const DEV_EMAIL = 'mail@example.com';

const ChangeEmailSubmitted = () => {
  const { onButtonClick } = useChangeEmailSubmitted();

  return (
    <FormPageSection type="h1" title="メールアドレス変更手続き開始">
      <Stack gap="24px" width="100%" alignItems="center">
        <p className={styles.description}>
          {`新たに設定されたメールアドレスへ、確認メールを送信しました。届いていない場合は、迷惑メールを確認していただくか、${DEV_EMAIL}からの受信設定を許可にしてください。`}
        </p>
        <Button onClick={onButtonClick}>トップへ戻る</Button>
      </Stack>
    </FormPageSection>
  );
};

export default ChangeEmailSubmitted;
