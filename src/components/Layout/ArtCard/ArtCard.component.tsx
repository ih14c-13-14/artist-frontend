import { LocationOn } from '@mui/icons-material';
import { TurnedIn } from '@mui/icons-material/';
import { CardMedia } from '@mui/material';

import { Bookmark } from '@/components/commons/Bookmark/Bookmark.component';
import { Box } from '@/features/ui/Box';
import { Card, CardContent } from '@/features/ui/Card';
import { Stack } from '@/features/ui/Stack';
import { Typography } from '@/features/ui/Typography';

import { CardProps } from './ArtCard.type';

// TODO: #106|デザイン適用
export const ArtCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  author,
  address,
}) => {
  return (
    <Card sx={{ p: 0, minWidth: '328px', height: '96px' }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          src={imageSrc}
          alt="Card Image"
          sx={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            margin: '5px',
            padding: '5px',
            borderRadius: '5px',
          }}
        />
        <CardContent
          sx={{
            width: '100%',
          }}
        >
          <Stack gap="4px" width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="h6">{title}</Typography>
              <Bookmark icon={TurnedIn} />
            </Stack>
            <Typography variant="body1">{author}</Typography>
            <Stack direction="row" width="100%">
              <LocationOn sx={{ marginRight: '5px' }} />
              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography isTruncated>{address}</Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};
