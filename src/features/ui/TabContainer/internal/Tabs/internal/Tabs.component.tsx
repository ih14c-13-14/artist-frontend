import { MuiTabs } from '@/features/ui/library';

import { useTabs } from './Tabs.hooks';
import type { TabsProps } from './Tabs.types';

const Tabs = ({ sx, ...rest }: TabsProps) => {
  const { tabsSx, tabIndicatorSx } = useTabs({ sx });

  return (
    <MuiTabs
      sx={tabsSx}
      TabIndicatorProps={{
        sx: tabIndicatorSx,
      }}
      {...rest}
    />
  );
};
export default Tabs;
