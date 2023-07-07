import { LocationOn } from '@mui/icons-material';

import { Typography } from '@/features/ui/Typography';

import { PostCodeProps } from './PostCode.type';
import { Stack } from '@/features/ui/Stack';

export const PostCode = ({ postCode, address }: PostCodeProps) => {
  // 郵便番号の整形
  const fixedPostCode = useMemo(() => {
    const postCodeString = postCode.toString();
    const firstPart = postCodeString.slice(0, 3);
    const secondPart = postCodeString.slice(3, 7);
    return `${firstPart}-${secondPart}`;
  }, [postCode]);

  return (
    <Stack flexDirection="row" sx={{ maxWidth: '100px' }}>
      <LocationOn sx={{ marginRight: '5px' }} />
      <Typography isTruncated>
        〒 {fixedPostCode} {address}
      </Typography>
    </Stack>
  );
};
