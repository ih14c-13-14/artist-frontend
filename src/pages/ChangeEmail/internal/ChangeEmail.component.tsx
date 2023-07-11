import { Stack } from '@mui/system';

import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';

import { Fields } from './ChangeEmail.constants';
import { useChangeEmail } from './ChangeEmail.hooks';
import { useChangeEmailForm } from './hooks/useChangeEmailForm';

const ChangeEmail = () => {
  const { register, handleSubmit, getValues, isValid } = useChangeEmailForm();
  const { onSubmit } = useChangeEmail({
    handleSubmit,
    getValues,
  });

  console.log(isValid);
  return (
    <FormPageSection
      type="h1"
      title="メールアドレスの変更"
      descriptionTop="登録したいメールアドレスを入力し、確認メールを送信してください。"
    >
      <form onSubmit={onSubmit} noValidate>
        <Stack gap="24px">
          <InputWrapper label="新しいメールアドレス">
            <TextInput
              sx={{ width: '100%' }}
              type="email"
              {...register(Fields.email)}
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

export default ChangeEmail;
