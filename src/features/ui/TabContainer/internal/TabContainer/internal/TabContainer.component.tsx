import { COLOR } from '@/constants/COLOR';
import { Stack } from '@/features/ui/Stack';

import { useTabContainerHooks } from './TabContainer.hooks';
import type { BaseTabs, TabContainerProps } from './TabContainer.types';
import { a11yProps, Tab } from '../../Tab';
import { TabPanel } from '../../TabPanel';
import { Tabs } from '../../Tabs';

/**
 * タブの制御と表示の切り替えを行うコンポーネント
 */
const TabContainer = <T extends BaseTabs>(props: TabContainerProps<T>) => {
  const {
    tabRows,
    flatTabs,
    genOnChange,
    getIsTabSelected,
    getSelectedTabIndexInRow,
    prefix,
  } = useTabContainerHooks(props);

  return (
    <div>
      <Stack spacing={0}>
        {tabRows.map((tabRow, rowIndex) => (
          <Tabs
            key={rowIndex}
            variant="fullWidth"
            centered
            value={getSelectedTabIndexInRow(tabRow)}
            indicatorColor="primary"
            onChange={genOnChange(tabRow)}
          >
            {tabRow.map(tab => (
              <Tab
                key={tab.value}
                label={tab.name}
                {...a11yProps(prefix, `${tab.value}`)}
                sx={{
                  '&.MuiButtonBase-root:hover': {
                    color: COLOR.PRIMARY,
                    backgroundColor: '#FAFBFC',
                  },
                }}
              />
            ))}
          </Tabs>
        ))}
      </Stack>
      {flatTabs.map(tab => (
        <TabPanel
          key={`tab-${tab.value}`}
          selected={getIsTabSelected(tab)}
          value={tab.value}
        >
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
};

export default TabContainer;
