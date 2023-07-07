import { LocationOn } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import { Stack } from '@/features/ui/Stack';
import { Typography } from '@/features/ui/Typography';

import { PostCodeProps } from './PostCode.type';

export const PostCode = ({ postCode, address }: PostCodeProps) => {
  const iconSize = 20;
  const fieldWidth = 146;
  const fontSize = 12;

  // アイコンのサイズ変更
  const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: iconSize,
          },
        },
      },
    },
  });

  // 郵便番号の整形
  const fixedPostCode = useMemo(() => {
    const postCodeString = postCode.toString();
    const firstPart = postCodeString.slice(0, 3);
    const secondPart = postCodeString.slice(3, 7);
    return `${firstPart}-${secondPart}`;
  }, [postCode]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={0}
        flexDirection="row"
        sx={{ maxWidth: iconSize + fieldWidth }}
      >
        <LocationOn sx={{ marginRight: 0 }} />
        <Typography isTruncated sx={{ fontSize, lineHeight: 'inherit' }}>
          〒{fixedPostCode}
          {address}
        </Typography>
      </Stack>
    </ThemeProvider>
  );
};
