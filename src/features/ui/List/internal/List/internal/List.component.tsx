import { MuiList } from '@/features/ui/library/List';

import { useList } from './List.hooks';
import type { ListProps } from './List.types';

const List = ({ sx, ...rest }: ListProps) => {
  const { sxMerged } = useList({ sx });

  return <MuiList {...rest} sx={sxMerged} />;
};

export default List;
