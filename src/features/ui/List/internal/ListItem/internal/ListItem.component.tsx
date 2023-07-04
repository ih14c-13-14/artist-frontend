import { MuiListItem } from '@/features/ui/library/List';

import { useListItem } from './ListItem.hooks';
import type { ListItemProps } from './ListItem.types';

const ListItem = ({ sx, ...rest }: ListItemProps) => {
  const { sxMerged } = useListItem({ sx });

  return <MuiListItem {...rest} sx={sxMerged} />;
};

export default ListItem;
