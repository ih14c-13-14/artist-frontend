import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Button } from '@/features/ui/Button';
import { Divider } from '@/features/ui/Divider';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Spacer } from '@/features/ui/Spacer';
import { Stack } from '@/features/ui/Stack';
import mapIdAndName from '@/utils/mapIdAndName';

import { ChangeMiscConfirmProps } from './ChangeMiscConfirm.types';

const ChangeMiscConfirm = ({
  getValues,
  formChoices,
  onBackToInput,
  onSubmit,
}: ChangeMiscConfirmProps) => {
  const values = getValues();
  const ageGroupChoices = mapIdAndName(formChoices.age_groupChoices);
  const genderChoices = mapIdAndName(formChoices.genderChoices);
  const prefectureChoices = mapIdAndName(formChoices.prefectureChoices);
  return (
    <FormPageSection
      type="h1"
      title="登録情報変更の確認"
      descriptionTop="ご入力された内容にお間違いがなければ、「登録する」ボタンを押してください。
	内容を訂正する場合は、「訂正する」ボタンを押すと編集ページに戻ります。"
    >
      <Divider />
      <Spacer size="12px" />
      <Stack divider={<Divider />} gap="12px">
        <InputWrapper label="年齢層">
          {ageGroupChoices[values.age_group]}
        </InputWrapper>
        <InputWrapper label="性別">{genderChoices[values.gender]}</InputWrapper>
        <InputWrapper label="都道府県">
          {prefectureChoices[values.prefecture]}
        </InputWrapper>
      </Stack>
      <Spacer size="12px" />
      <Divider />
      <Spacer size="24px" />
      <Stack direction="row">
        <Button variant="OUTLINED" onClick={onBackToInput}>
          訂正する
        </Button>
        <Button onClick={onSubmit}>登録する</Button>
      </Stack>
    </FormPageSection>
  );
};

export default ChangeMiscConfirm;
