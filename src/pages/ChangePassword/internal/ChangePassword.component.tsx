import { Stack } from '@mui/system';

import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';

import { Fields } from './ChangePassword.constants';
import { useChangePassword } from './ChangePassword.hooks';
import { usePasswordChangeForm } from './hooks/usePasswordChangeForm';

const ChangePassword = () => {
  const { register, handleSubmit, getValues, isValid } =
    usePasswordChangeForm();
  const { onSubmit } = useChangePassword({
    handleSubmit,
    getValues,
  });

  return (
    <FormPageSection type="h1" title="パスワードの変更">
      <form onSubmit={onSubmit} noValidate>
        <Stack gap="24px">
          <InputWrapper label="現在のパスワード">
            <TextInput
              sx={{ width: '100%' }}
              type="password"
              {...register(Fields.current_password)}
            />
          </InputWrapper>
          <InputWrapper label="確認用パスワード">
            <TextInput
              sx={{ width: '100%' }}
              type="password"
              {...register(Fields.new_password)}
            />
          </InputWrapper>
          <InputWrapper label="新しいパスワード（確認）">
            <TextInput
              sx={{ width: '100%' }}
              type="password"
              {...register(Fields.new_password_confirm)}
            />
          </InputWrapper>
          <Button type="submit" disabled={!isValid}>
            送信
          </Button>
        </Stack>
      </form>
    </FormPageSection>
  );
};

export default ChangePassword;
