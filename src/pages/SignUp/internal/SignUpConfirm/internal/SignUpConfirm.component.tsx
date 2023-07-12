import { Button } from '@/features/ui/Button';
import { Divider } from '@/features/ui/Divider';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { H1_DESCRIPTION_TOP } from './SignUpConfirm.constants';
import styles from './SignUpConfirm.module.scss';
import { SignUpConfirmProps } from './SignUpConfirm.types';

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
          <div className={styles.exampleContainer}>
            <p className={styles.signup_confirm__label}>メールアドレス</p>
            <p className={styles.signup_confirm__value}>{email}</p>
          </div>
          <div className={styles.exampleContainer}>
            <p className={styles.signup_confirm__label}>年齢層</p>
            <p className={styles.signup_confirm__value}>{age_group}</p>
          </div>
          <div className={styles.exampleContainer}>
            <p className={styles.signup_confirm__label}>性別</p>
            <p className={styles.signup_confirm__value}>{gender}</p>
          </div>
          <div className={styles.exampleContainer}>
            <p className={styles.signup_confirm__label}>都道府県</p>
            <p className={styles.signup_confirm__value}>{prefecture}</p>
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
