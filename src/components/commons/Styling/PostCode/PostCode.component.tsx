import { LocationOn } from '@mui/icons-material';
import { useMemo } from 'react';

import { Stack } from '@/features/ui/Stack';
import { Typography } from '@/features/ui/Typography';
import { SxProps, Theme } from '@/features/ui/library';

import { PostCodeProps } from './PostCode.type';

const iconSize = 20;
const fieldWidth = 146;
const fontSize = 12;

export const PostCode = ({ postCode, address }: PostCodeProps) => {
  const IconSxProps = {
    '&.MuiSvgIcon-root': {
      fontSize: iconSize,
    },
  } satisfies SxProps<Theme>;

  const FontSx = {
    '&.MuiTypography-root': {
      fontSize,
      lineHeight: 'normal',
    },
  };

  // 郵便番号の整形
  const fixedPostCode = useMemo(() => {
    const postCodeString = postCode.toString();
    const firstPart = postCodeString.slice(0, 3);
    const secondPart = postCodeString.slice(3, 7);
    return `${firstPart}-${secondPart}`;
  }, [postCode]);

  return (
    <Stack
      spacing={0}
      flexDirection="row"
      sx={{ maxWidth: iconSize + fieldWidth }}
    >
      <LocationOn sx={IconSxProps} />
      <Typography isTruncated sx={FontSx}>
        〒{fixedPostCode}
        {address}
      </Typography>
    </Stack>
  );
};
