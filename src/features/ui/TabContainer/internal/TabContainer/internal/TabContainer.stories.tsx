import type { Meta } from '@storybook/react';
import { useState } from 'react';

import TabContainer from './TabContainer.component';
import type { BaseTabs } from './TabContainer.types';

const TabContainerStory: Meta<typeof TabContainer> = {
  component: TabContainer,
  args: {},
};

export default TabContainerStory;

export const Normal = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs: BaseTabs = [
    { name: 'Tab 1', value: 'tab1', component: <>hoge1</> },
    { name: 'Tab 2', value: 'tab2', component: <>hoge2</> },
    { name: 'Tab 3', value: 'tab3', component: <>hoge3</> },
    { name: 'Tab 4', value: 'tab4', component: <>hoge4</> },
    { name: 'Tab 5', value: 'tab5', component: <>hoge5</> },
    { name: 'Tab 6', value: 'tab6', component: <>hoge6</> },
  ];

  return (
    <TabContainer value={activeTab} tabs={tabs} handleChange={setActiveTab} />
  );
};

export const Multi = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs: BaseTabs = [
    [
      { name: 'Tab 1', value: 'tab1', component: <>hoge1</> },
      { name: 'Tab 2', value: 'tab2', component: <>hoge2</> },
      { name: 'Tab 3', value: 'tab3', component: <>hoge3</> },
    ],
    [
      { name: 'Tab 4', value: 'tab4', component: <>hoge4</> },
      { name: 'Tab 5', value: 'tab5', component: <>hoge5</> },
    ],
    [{ name: 'Tab 6', value: 'tab6', component: <>hoge6</> }],
  ];

  return (
    <TabContainer value={activeTab} tabs={tabs} handleChange={setActiveTab} />
  );
};
