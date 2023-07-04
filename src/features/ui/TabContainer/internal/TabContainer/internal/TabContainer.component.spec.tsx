import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { default as TabContainer } from './TabContainer.component';

const tabs = [
  {
    name: 'Tab 1',
    value: 'tab1',
    component: <div>Tab 1 content</div>,
  },
  {
    name: 'Tab 2',
    value: 'tab2',
    component: <div>Tab 2 content</div>,
  },
] as const;

const multiTabs = [
  [
    {
      name: 'Tab 1',
      value: 'tab1',
      component: <div>Tab 1 content</div>,
    },
  ],
  [
    {
      name: 'Tab 2',
      value: 'tab2',
      component: <div>Tab 2 content</div>,
    },
  ],
];

const Wrapper = ({ isMulti = false }: { isMulti?: boolean }) => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  return (
    <TabContainer
      tabs={isMulti ? multiTabs : tabs}
      value={activeTab}
      handleChange={setActiveTab}
    />
  );
};

describe('TabContainer', () => {
  const setup = ({ isMulti = false }: { isMulti?: boolean }) => {
    const user = userEvent.setup();
    const utils = render(<Wrapper isMulti={isMulti} />);

    return { user, utils };
  };
  it('一段タブの時にTabを選択してTabPanelの表示を切り替えることができる', async () => {
    const { user } = setup({});
    const tab1 = screen.getByTestId('Tab 1');
    const tab2 = screen.getByTestId('Tab 2');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();

    const tab1Panel = screen.getByTestId(`simple-tabpanel-tab1`);
    const tab2Panel = screen.getByTestId(`simple-tabpanel-tab2`);

    expect(tab1Panel).toBeInTheDocument();
    expect(tab2Panel).toBeInTheDocument();

    await waitFor(async () => {
      await user.click(tab2);
    });
    expect(tab1Panel).not.toBeVisible();
    expect(tab2Panel).toBeVisible();

    await waitFor(async () => {
      await user.click(tab1);
    });
    expect(tab1Panel).toBeVisible();
    expect(tab2Panel).not.toBeVisible();
  });

  it('多段タブの時にTabを選択してTabPanelの表示を切り替えることができる', async () => {
    const { user } = setup({
      isMulti: true,
    });
    const tab1 = screen.getByTestId('Tab 1');
    const tab2 = screen.getByTestId('Tab 2');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();

    const tab1Panel = screen.getByTestId(`simple-tabpanel-tab1`);
    const tab2Panel = screen.getByTestId(`simple-tabpanel-tab2`);

    expect(tab1Panel).toBeInTheDocument();
    expect(tab2Panel).toBeInTheDocument();

    await waitFor(async () => {
      await user.click(tab2);
    });
    expect(tab1Panel).not.toBeVisible();
    expect(tab2Panel).toBeVisible();

    await waitFor(async () => {
      await user.click(tab1);
    });
    expect(tab1Panel).toBeVisible();
    expect(tab2Panel).not.toBeVisible();
  });
});
