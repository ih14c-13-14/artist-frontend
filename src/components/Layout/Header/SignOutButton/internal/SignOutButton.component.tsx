import { COLOR } from '@/constants/COLOR';
import { useSignOut } from '@/features/auth';
import { Icon } from '@/features/ui/Icon';
import { Stack } from '@/features/ui/Stack';

import styles from './SignOutButton.module.scss';

const SignOutButton = () => {
  const { signOut } = useSignOut();

  return (
    <Stack onClick={signOut} alignItems="center" gap={0}>
      <Icon type="SignOut" fill={COLOR.PRIMARY} size="24px" />
      <p className={styles.label}>サインアウト</p>
    </Stack>
  );
};

export default SignOutButton;
