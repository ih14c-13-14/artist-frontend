import type { SyntheticEvent } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import identity from '@/utils/identity';
import { uuidv4 } from '@/utils/uuid';

import type {
  BaseTabs,
  Tab,
  TabContainerProps,
  TabRows,
} from './TabContainer.types';
import validateIfDuplicated from './validateIfDuplicated';

export const useTabContainerHooks = <T extends BaseTabs>(
  props: TabContainerProps<T>
) => {
  const { value, tabs, handleChange } = props;
  type TheTab = Tab<T>;
  validateIfDuplicated({ items: tabs });

  const tabRows = useMemo(() => convertMultiRows(tabs), [tabs]);
  const flatTabs = useMemo(() => tabRows.flatMap(identity), [tabRows]);

  const genOnChange = useCallback(
    (tabRow: ReadonlyArray<TheTab>) =>
      (event: SyntheticEvent, selectedTabIndex: number) => {
        const result = tabRow[selectedTabIndex].value;
        handleChange(result);
      },
    [handleChange]
  );

  const getIsTabSelected = useCallback(
    (tab: TheTab) => {
      return value === tab.value;
    },
    [value]
  );

  const getSelectedTabIndexInRow = useCallback(
    (tabRow: ReadonlyArray<TheTab>) => {
      const foundIndex = tabRow.findIndex(tab => tab.value === value);
      return foundIndex === -1 ? false : foundIndex;
    },
    [value]
  );

  const [prefix, setPrefix] = useState<string>('');

  useEffect(() => {
    setPrefix(uuidv4());
  }, [setPrefix]);

  return {
    tabRows,
    flatTabs,
    genOnChange,
    getIsTabSelected,
    getSelectedTabIndexInRow,
    prefix,
  };
};

const convertMultiRows = <T extends BaseTabs>(tabs: T): TabRows<T> => {
  // HACK: 型合わせるの無理でした
  return (Array.isArray(tabs[0]) ? tabs : [tabs]) as TabRows<T>;
};
