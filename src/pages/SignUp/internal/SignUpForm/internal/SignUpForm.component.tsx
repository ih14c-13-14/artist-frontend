import { useState } from 'react';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

import { TermsBody } from '@/features/business/signUp/TermsBody';
import { Checkbox } from '@/features/form/inputs/Checkbox';
import { RadioGroup } from '@/features/form/inputs/RadioGroup';
import { SelectInput } from '@/features/form/inputs/SelectInput';
import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { Fields } from '../../SignUp.constants';
import { SignUpFormType } from '../../SignUp.types';

const SignUpForm = ({
  onBackToSignIn,
  onConfirm,
  register,
  control,
  isValid,
}: {
  onBackToSignIn: () => void;
  onConfirm: () => void;
  register: UseFormRegister<SignUpFormType>;
  control: Control<SignUpFormType, {}>;
  isValid: boolean;
  isTermsAgreed: boolean;
  onTermsCheckboxChange: () => void;
}) => {
  const [isTermsScrolled, setIsTermsScrolled] = useState(false);

  return (
    <FormPageSection type="h1" title="新規会員登録">
      <Stack gap="24px">
        <InputWrapper label="メールアドレス">
          <TextInput sx={{ width: '100%' }} {...register(Fields.email)} />
        </InputWrapper>
        <InputWrapper label="パスワード">
          <TextInput
            sx={{ width: '100%' }}
            type="password"
            {...register(Fields.password)}
          />
        </InputWrapper>
        <InputWrapper label="確認用パスワード">
          <TextInput
            sx={{ width: '100%' }}
            type="password"
            {...register(Fields.passwordConfirm)}
          />
        </InputWrapper>
        <InputWrapper label="年齢層">
          <Controller
            name={Fields.age_group}
            control={control}
            render={({ field }) => (
              <SelectInput
                {...field}
                choices={[
                  {
                    id: 10,
                    name: '10代',
                  },
                  {
                    id: 20,
                    name: '20代',
                  },
                ]}
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label="性別">
          <Controller
            name={Fields.gender}
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                choices={[
                  {
                    id: 1,
                    name: '男性',
                  },
                  {
                    id: 2,
                    name: '女性',
                  },
                  {
                    id: 3,
                    name: 'その他',
                  },
                ]}
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label="都道府県">
          <Controller
            name={Fields.prefecture}
            control={control}
            render={({ field }) => (
              <SelectInput
                {...field}
                choices={[
                  {
                    id: 10,
                    name: '群馬県',
                  },
                  {
                    id: 20,
                    name: '長野県',
                  },
                ]}
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label="利用規約">
          <TermsBody setIsTermsScrolled={setIsTermsScrolled} />
        </InputWrapper>
        <Checkbox
          {...register(Fields.isTermsAgreed)}
          disabled={!isTermsScrolled}
          choiceLabel="注意事項・利用規約・プライバシーポリシーにご同意の上、確認画面へお進みください。"
        />
        <Stack direction="row">
          <Button type="button" onClick={onBackToSignIn} variant="OUTLINED">
            ログイン画面に戻る
          </Button>
          <Button type="button" onClick={onConfirm} disabled={!isValid}>
            確認画面へ
          </Button>
        </Stack>
      </Stack>
    </FormPageSection>
  );
};

export default SignUpForm;
