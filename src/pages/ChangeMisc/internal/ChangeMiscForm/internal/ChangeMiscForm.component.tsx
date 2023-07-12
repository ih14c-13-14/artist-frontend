import { Controller } from 'react-hook-form';

import { RadioGroup } from '@/features/form/inputs/RadioGroup';
import { SelectInput } from '@/features/form/inputs/SelectInput';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';

import { ChangeMiscFormProps } from './ChangeMiscForm.types';
import { Fields } from '../../ChangeMisc.constants';

const ChangeMiscForm = ({
  control,
  formChoices,
  onConfirm,
  isValid,
}: ChangeMiscFormProps) => {
  return (
    <FormPageSection type="h1" title="登録情報の変更">
      <Stack gap="24px">
        <InputWrapper label="年齢層">
          <Controller
            name={Fields.age_group}
            control={control}
            render={({ field }) => (
              <SelectInput {...field} choices={formChoices.age_groupChoices} />
            )}
          />
        </InputWrapper>
        <InputWrapper label="性別">
          <Controller
            name={Fields.gender}
            control={control}
            render={({ field }) => (
              <RadioGroup {...field} choices={formChoices.genderChoices} />
            )}
          />
        </InputWrapper>
        <InputWrapper label="都道府県">
          <Controller
            name={Fields.prefecture}
            control={control}
            render={({ field }) => (
              <SelectInput {...field} choices={formChoices.prefectureChoices} />
            )}
          />
        </InputWrapper>
        <Button type="button" onClick={onConfirm} disabled={!isValid}>
          確認画面へ
        </Button>
      </Stack>
    </FormPageSection>
  );
};

export default ChangeMiscForm;
