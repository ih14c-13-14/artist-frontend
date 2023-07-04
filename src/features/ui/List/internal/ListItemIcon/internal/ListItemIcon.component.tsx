import { MuiListItemIcon } from '@/features/ui/library/List';

import { useListItemIcon } from './ListItemIcon.hooks';
import type { ListItemIconProps } from './ListItemIcon.types';

const ListItemIcon = ({ sx, ...rest }: ListItemIconProps) => {
  const { sxMerged } = useListItemIcon({ sx });

  return <MuiListItemIcon {...rest} sx={sxMerged} />;
};

export default ListItemIcon;
