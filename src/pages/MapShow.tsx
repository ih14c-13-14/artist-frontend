import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/features/ui/Button';
import { Stack } from '@/features/ui/Stack';
import { getRoutes } from '@/routes/getRoutes';

export const MapShow: React.FC = () => {
  const routes = getRoutes();
  const navigate = useNavigate();

  const onMoveSetting = () => {
    navigate(routes.settings.path);
  };

  return (
    <Stack>
      <Button onClick={onMoveSetting}>登録情報の変更</Button>
    </Stack>
  );
};
