import { MuiListItemText } from '@/features/ui/library/List';

import { useListItemText } from './ListItemText.hooks';
import type { ListItemTextProps } from './ListItemText.types';

const ListItemText = ({ sx, ...rest }: ListItemTextProps) => {
  const { sxMerged } = useListItemText({ sx });

  return <MuiListItemText {...rest} sx={sxMerged} />;
};

export default ListItemText;
