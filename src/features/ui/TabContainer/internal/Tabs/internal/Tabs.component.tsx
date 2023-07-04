import { MuiTabs } from '@/features/ui/library/Tab';

import { useTabs } from './Tabs.hooks';
import type { TabsProps } from './Tabs.types';

const Tabs = ({ sx, ...rest }: TabsProps) => {
  const { tabIndicatorSx } = useTabs();

  return (
    <MuiTabs
      sx={sx}
      TabIndicatorProps={{
        sx: tabIndicatorSx,
      }}
      {...rest}
    />
  );
};
export default Tabs;
