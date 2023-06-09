import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { uuidv4 } from '@/utils/uuid';

import Tabs from './Tabs.component';
import { a11yProps, Tab } from '../../Tab';

const TabsStory: Meta<typeof Tabs> = {
  component: Tabs,
  args: {},
};

export default TabsStory;

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

  return (
    <Tabs value={activeTab} onChange={onChange}>
      {tabs.map((tab, index) => (
        <Tab
          key={`${tab.label}${index}`}
          label={tab.label}
          {...a11yProps(uuidv4(), index)}
        />
      ))}
    </Tabs>
  );
};
