import { LocationOn } from '@mui/icons-material';
import { TurnedIn } from '@mui/icons-material/';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Bookmark } from '@/components/commons/Bookmark/Bookmark.component';
import { Stack } from '@/features/ui/Stack';

import { CardProps } from './ArtCard.type';

// TODO: #106|デザイン適用
export const ArtCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  author,
  address,
}) => {
  return (
    <Card sx={{ p: 0, display: 'flex', alignItems: 'center', width: '100%' }}>
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
      <CardContent sx={{ flex: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <Bookmark icon={TurnedIn} />
        </Box>
        <Typography variant="body1">{author}</Typography>
        <Stack flexDirection="row">
          <LocationOn sx={{ marginRight: '5px' }} />
          <Typography variant="body1">{address}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
