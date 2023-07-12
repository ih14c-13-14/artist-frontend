import { NoFetchedDataException } from '@/error';
import { InputWrapper } from '@/features/form/inputs/commons/InputWrapper';
import { Divider } from '@/features/ui/Divider';
import { FormPageSection } from '@/features/ui/FormPageSection';
import { Stack } from '@/features/ui/Stack';
import isNil from '@/utils/isNil';

import { useSettings } from './Settings.hooks';
import styles from './Settings.module.scss';

const Settings = () => {
  const {
    onMiscChangeClicked,
    onEmailChangeClicked,
    onPasswordChangeClicked,
    data,
    isLoading,
  } = useSettings();

  // TODO: ローディング中のフォールバックUIを考えておく
  if (isLoading) return <div>loading...</div>;
  if (isNil(data)) throw new NoFetchedDataException();

  return (
    <FormPageSection
      type="h1"
      title="登録情報の変更"
      descriptionTop="現在のお客様のご登録内容を表示しています。
	内容を変更する場合はそれぞれの変更するボタンを押してください。"
    >
      <Stack gap="24px">
        <InputWrapper label="基本情報">
          <Stack gap="12px">
            <Divider />
            <Stack direction="row" px="12px" alignItems="center">
              <div className={styles.dataContainer}>
                <div className={styles.data}>{data.age_group}</div>
                <div className={styles.data}>{data.gender}</div>
                <div className={styles.data}>{data.prefecture}</div>
              </div>
              <a className={styles.anchor} onClick={onMiscChangeClicked}>
                変更する
              </a>
            </Stack>
            <Divider />
          </Stack>
        </InputWrapper>
        <InputWrapper label="メールアドレス">
          <Divider />
          <Stack direction="row" px="12px" alignItems="center">
            <div className={styles.dataContainer}>
              <div className={styles.data}>{data.email}</div>
            </div>
            <a className={styles.anchor} onClick={onEmailChangeClicked}>
              変更する
            </a>
          </Stack>
          <Divider />
        </InputWrapper>
        <InputWrapper label="パスワード">
          <Divider />
          <Stack direction="row" px="12px" alignItems="center">
            <div className={styles.dataContainer}>
              <div className={styles.data}>************</div>
            </div>
            <a className={styles.anchor} onClick={onPasswordChangeClicked}>
              変更する
            </a>
          </Stack>
          <Divider />
        </InputWrapper>
      </Stack>
    </FormPageSection>
  );
};

export default Settings;
