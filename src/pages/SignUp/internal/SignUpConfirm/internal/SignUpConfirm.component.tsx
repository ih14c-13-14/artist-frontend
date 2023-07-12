import { Button } from '@/features/ui/Button';
import { Divider } from '@/features/ui/Divider';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { H1_DESCRIPTION_TOP } from './SignUpConfirm.constants';
import styles from './SignUpConfirm.module.scss';
import { SignUpConfirmProps } from './SignUpConfirm.types';
import { Spacer } from '@/features/ui/Spacer';

const SignUpConfirm = ({
  onBackToInput,
  onSubmit,
  getValues,
}: SignUpConfirmProps) => {
  const { email, age_group, gender, prefecture } = getValues();
  return (
    <FormPageSection
      type="h1"
      title="新規会員登録の確認"
      descriptionTop={H1_DESCRIPTION_TOP}
    >
      <Stack>
        <Stack divider={<Divider />} gap="12px">
          <div className={styles.signUpItemContainer}>
            <Spacer size="12px" />
            <p className={styles.signUpConfirmLabel}>メールアドレス</p>
            <Spacer size="8px" />
            <p>{email}</p>
          </div>
          <div className={styles.signUpItemContainer}>
            <Spacer size="12px" />
            <p className={styles.signUpConfirmLabel}>年齢層</p>
            <Spacer size="8px" />
            <p>{age_group}</p>
          </div>
          <div className={styles.signUpItemContainer}>
            <Spacer size="12px" />
            <p className={styles.signUpConfirmLabel}>性別</p>
            <Spacer size="8px" />
            <p>{gender}</p>
          </div>
          <div className={styles.signUpItemContainer}>
            <Spacer size="12px" />
            <p className={styles.signUpConfirmLabel}>都道府県</p>
            <Spacer size="8px" />
            <p>{prefecture}</p>
          </div>
        </Stack>
        <Divider />
        <Stack direction="row">
          <Button variant="OUTLINED" onClick={onBackToInput}>
            訂正する
          </Button>
          <Button onClick={onSubmit}>送信する</Button>
        </Stack>
      </Stack>
    </FormPageSection>
  );
};

export default SignUpConfirm;
