import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { useSignUpCompleted } from './SignUpCompleted.hooks';
import styles from './SignUpCompleted.module.scss';

const SignUpCompleted = () => {
  const { onButtonClick } = useSignUpCompleted();

  return (
    <FormPageSection type="h1" title="会員登録完了">
      <Stack gap="24px" width="100%" alignItems="center">
        <p className={styles.description}>
          ARtistの会員登録が完了しました。
          <br /> ARtistをお楽しみください。
        </p>
        <Button onClick={onButtonClick}>はじめる</Button>
      </Stack>
    </FormPageSection>
  );
};

export default SignUpCompleted;
