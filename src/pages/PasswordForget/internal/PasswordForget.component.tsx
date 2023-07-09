import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { usePasswordForget } from './PasswordForget.hooks';

const PasswordForget = () => {
  const { register, handleSubmit } = usePasswordForget();
  return (
    <FormPageSection
      type="h1"
      title="パスワードをお忘れの場合"
      descriptionTop="登録したアカウントのメールアドレスにパスワード再設定ページのURLをお送りいたします。"
    >
      <form onSubmit={handleSubmit} noValidate>
        <Stack gap="24px">
          <InputWrapper label="メールアドレス">
            <TextInput sx={{ width: '100%' }} {...register('email')} />
          </InputWrapper>
          <Button type="submit">送信</Button>
        </Stack>
      </form>
    </FormPageSection>
  );
};

export default PasswordForget;
