import { Checkbox } from '@/features/form/inputs/Checkbox';
import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Spacer } from '@/features/ui/Spacer';
import { Stack } from '@/features/ui/Stack';

import { useSignIn } from './SignIn.hooks';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const { formOnSubmitHandler, handlePasswordForget, handleSignUp, register } =
    useSignIn();

  return (
    <FormPageSection type="h1" title="ログイン・新規会員登録">
      <FormPageSection type="h2" title="登録済みの方">
        {/* TODO: サインイン画面実装時に入れる */}
        <form onSubmit={formOnSubmitHandler} noValidate>
          <Stack gap="24px">
            <InputWrapper label="メールアドレス">
              <TextInput {...register('email')} sx={{ width: '100%' }} />
            </InputWrapper>
            <InputWrapper label="パスワード">
              <TextInput
                {...register('password')}
                type="password"
                sx={{ width: '100%' }}
              />
            </InputWrapper>
          </Stack>
          <Spacer size="16px" />
          {/* TODO: やるか不明、とりあえずおくだけ */}
          <Checkbox choiceLabel="次回から自動ログインにする" />
          <Spacer size="24px" />
          <Button type="submit">ログイン</Button>
          <Spacer size="16px" />
          <div className={styles.navigatePasswordResetContainer}>
            <span>パスワードをお忘れの方は</span>
            <a
              className={styles.navigatePasswordResetAnchor}
              onClick={handlePasswordForget}
            >
              こちら
            </a>
          </div>
        </form>
      </FormPageSection>
      <FormPageSection type="h2" title="はじめての方">
        <Button variant="OUTLINED" onClick={handleSignUp}>
          新規会員登録
        </Button>
      </FormPageSection>
    </FormPageSection>
  );
};

export default SignIn;
