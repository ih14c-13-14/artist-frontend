import { GUTTER } from './Toolbar.constants';
import type { ToolbarProps } from './Toolbar.types';

const useToolbar = ({ height, disableGutters, sx }: ToolbarProps) => {
  const toolBarSx = {
    minHeight: height,
    height,
    width: disableGutters ? '100%' : `calc(100% - ${GUTTER * 2}px)`,
    ...sx,
  };

  return {
    toolBarSx,
  } as const;
};
export default useToolbar;
