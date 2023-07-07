import React from 'react';

import { Checkbox } from '@/features/form/inputs/Checkbox';
import { FormControlLabel } from '@/features/form/inputs/FormControlLabel';
import { TextInput } from '@/features/form/inputs/TextInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Spacer } from '@/features/ui/Spacer';
import { Stack } from '@/features/ui/Stack';

export const SignIn = () => {
  return (
    <FormPageSection type="h1" title="ログイン・新規会員登録">
      <FormPageSection type="h2" title="登録済みの方">
        {/* TODO: サインイン画面実装時に入れる */}
        <form onSubmit={() => {}}>
          <Stack gap="24px">
            <InputWrapper label="メールアドレス">
              <TextInput sx={{ width: '100%' }} />
            </InputWrapper>
            <InputWrapper label="パスワード">
              <TextInput sx={{ width: '100%' }} />
            </InputWrapper>
          </Stack>
          <Spacer size="16px" />
          <FormControlLabel
            control={<Checkbox />}
            label="次回から自動ログインにする"
            sx={{ width: '100%' }}
          />
          <Spacer size="24px" />
          <Button label="ログイン" sx={{ width: '100%' }} />
        </form>
      </FormPageSection>
      <FormPageSection type="h2" title="はじめての方">
        <Button
          variant="outlined"
          label="新規会員登録"
          sx={{ width: '100%' }}
        />
      </FormPageSection>
    </FormPageSection>
  );
};
1;
