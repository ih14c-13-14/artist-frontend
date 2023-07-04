import { Box } from '@/features/ui/Box';

import { PADDING } from './TabPanel.constants';
import type { TabPanelProps } from './TabPanel.types';

const TabPanel = ({ children, value, selected }: TabPanelProps) => {
  return (
    <div
      style={{
        minHeight: 0,
      }}
      role="tabpanel"
      hidden={!selected}
      id={`simple-tabpanel-${value}`}
      aria-labelledby={`simple-tab-${value}`}
    >
      {selected && (
        <Box height="100%" paddingY={`${PADDING}px`} boxSizing="border-box">
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
