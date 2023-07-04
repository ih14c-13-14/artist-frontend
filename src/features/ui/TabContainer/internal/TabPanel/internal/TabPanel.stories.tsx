import type { Meta } from '@storybook/react';
import { useCallback, useEffect, useState } from 'react';

import { Stack } from '@/features/ui/Stack';
import { uuidv4 } from '@/utils/uuid';

import TabPanel from './TabPanel.component';
import { a11yProps, Tab } from '../../Tab';
import { Tabs } from '../../Tabs';

const TabPanelStory: Meta<typeof TabPanel> = {
  component: TabPanel,
  args: {},
};

export default TabPanelStory;

export const Default = () => {
  const tabs = [
    {
      label: 'Tab 1',
    },
    {
      label: 'Tab 2',
    },
    {
      label: 'Tab 3',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setActiveTab(value);
  };

  const [prefix, setPrefix] = useState<string>('');

  useEffect(() => {
    setPrefix(uuidv4());
  }, [setPrefix]);

  const isTabSelected = useCallback(
    (tabNumber: number) => tabNumber === activeTab,
    [activeTab]
  );

  return (
    <div>
      <Stack>
        <Tabs value={activeTab} onChange={onChange}>
          {tabs.map((tab, index) => (
            <Tab
              key={`${tab.label}${index}`}
              label={tab.label}
              {...a11yProps(prefix, index)}
            />
          ))}
        </Tabs>
      </Stack>

      {tabs.map((tab, index) => (
        <TabPanel
          key={`${tab.label}${index}`}
          value={activeTab}
          selected={isTabSelected(index)}
        >
          {tab.label}
        </TabPanel>
      ))}
    </div>
  );
};
