import { Box } from '@/features/ui/Box';
import { Stack } from '@/features/ui/Stack';

import { STACK_SX } from './ListContainer.constants';
import useListContainer from './ListContainer.hooks';
import type { ListContainerProps } from './ListContainer.types';

const ListContainer = ({ width, height, children }: ListContainerProps) => {
  const { BOX_SX } = useListContainer({ width, height });

  return (
    <Stack spacing={0} height="100%" sx={STACK_SX}>
      <Box boxSizing="border-box" padding={2} borderRadius={2} sx={BOX_SX}>
        {children}
      </Box>
    </Stack>
  );
};

export default ListContainer;
