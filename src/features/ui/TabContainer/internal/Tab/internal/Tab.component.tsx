import { MuiTab } from '@/features/ui/library';

import { useTab } from './Tab.hooks';
import type { TabProps } from './Tab.types';

const Tab = ({ sx, ...rest }: TabProps) => {
  const { sxMerged } = useTab({ sx });
  return <MuiTab sx={sxMerged} {...rest} data-testid={rest.label} />;
};
export default Tab;
