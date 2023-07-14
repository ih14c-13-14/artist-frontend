import { COLOR } from '@/constants/COLOR';
import { Icon } from '@/features/ui/Icon';
import { Stack } from '@/features/ui/Stack';

import styles from './SignOutButton.module.scss';

const SignOutButton = () => {
  return (
    <Stack onClick={() => {}} alignItems="center" gap={0}>
      <Icon type="SignOut" fill={COLOR.PRIMARY} size="24px" />
      <p className={styles.label}>サインアウト</p>
    </Stack>
  );
};

export default SignOutButton;
