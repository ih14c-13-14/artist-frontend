import { LocationOn } from '@mui/icons-material';

import { Typography } from '@/features/ui/Typography';

import { PostCodeProps } from './PostCode.type';
import { StackChildren } from '../StackChildren/StackChildren';

export const PostCode = ({ postCode, address }: PostCodeProps) => {
  // 郵便番号の整形
  const postCodeString = postCode.toString();
  const firstPart = postCodeString.slice(0, 3);
  const secondPart = postCodeString.slice(3, 7);

  const fixedPostCode = `${firstPart}-${secondPart}`;

  return (
    <div style={{ display: 'flex', maxWidth: '100px' }}>
      <StackChildren flexDirection="row">
        <LocationOn sx={{ marginRight: '5px' }} />
        <Typography isTruncated>
          〒 {fixedPostCode} {address}
        </Typography>
      </StackChildren>
    </div>
  );
};
