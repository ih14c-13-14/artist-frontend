import { MuiTab } from '@/features/ui/library/Tab';

import { useTab } from './Tab.hooks';
import type { TabProps } from './Tab.types';

const Tab = ({ sx, ...rest }: TabProps) => {
  const { sxMerged } = useTab({ sx });
  return <MuiTab sx={sxMerged} {...rest} />;
};
export default Tab;
