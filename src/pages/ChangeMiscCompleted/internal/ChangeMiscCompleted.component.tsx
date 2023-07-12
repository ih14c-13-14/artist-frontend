import { BackToTopButton } from '@/features/navigate/BackToTopButton';
import { useInvalidDirectAccess } from '@/features/navigate/hooks/useInvalidDirectAccess';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import styles from './ChangeMiscCompleted.module.scss';

const ChangeMiscCompleted = () => {
  useInvalidDirectAccess();
  return (
    <FormPageSection type="h1" title="登録情報変更完了">
      <Stack gap="24px" width="100%" alignItems="center">
        <p className={styles.description}>登録情報の変更が完了しました。</p>
        <BackToTopButton />
      </Stack>
    </FormPageSection>
  );
};

export default ChangeMiscCompleted;
