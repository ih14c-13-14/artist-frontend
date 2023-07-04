import { LocationOn } from '@mui/icons-material';
import { TurnedIn } from '@mui/icons-material/';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import { Bookmark } from '@/components/commons/Bookmark/Bookmark.component';
import { StackChildren } from '@/components/commons/Styling/StackChildren/StackChildren';
import { CardProps } from './ArtCart.type';

export const ArtCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  author,
  address,
}) => {
  return (
    <Card sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
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
          backgroundColor: '#1a1a1a',
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <Bookmark icon={TurnedIn} />
        </Box>
        <Typography variant="body1">{author}</Typography>
        <StackChildren flexDirection="row">
          <LocationOn sx={{ marginRight: '5px' }} />
          <Typography variant="body1">{address}</Typography>
        </StackChildren>
      </CardContent>
    </Card>
  );
};
