import React from 'react';

import { Stack } from '@/features/ui/Stack';
import { MuiToolbar } from '@/features/ui/library';

import {
  TOOLBAR_DEFAULT_HEIGHT,
  TOOLBAR_DEFAULT_SPACING,
} from './Toolbar.constants';
import useToolbar from './Toolbar.hooks';
import type { ToolbarProps } from './Toolbar.types';

const Toolbar = ({
  height = `${TOOLBAR_DEFAULT_HEIGHT}px`,
  leftItems,
  rightItems,
  disableGutters,
  spacing = TOOLBAR_DEFAULT_SPACING,
  sx,
  ...rest
}: ToolbarProps) => {
  const { toolBarSx } = useToolbar({ height, disableGutters, sx });

  return (
    <MuiToolbar
      sx={toolBarSx}
      disableGutters={disableGutters}
      variant="dense"
      {...rest}
    >
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack
          direction="row"
          alignItems="center"
          spacing={spacing}
          width="100%"
        >
          {leftItems}
        </Stack>
        {typeof rightItems === 'boolean' ? (
          rightItems === true ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={spacing}
              width="100%"
            >
              {rightItems}
            </Stack>
          ) : null
        ) : (
          rightItems
        )}
      </Stack>
    </MuiToolbar>
  );
};
export default Toolbar;
