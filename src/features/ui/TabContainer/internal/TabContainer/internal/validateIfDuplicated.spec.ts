import { createElement } from 'react';

import { LogicException } from '@/error';
import { Identity } from '@/features/ui/Identity';

import type { BaseTabs } from './TabContainer.types';
import validateIfDuplicated from './validateIfDuplicated';

describe('validateIfDuplicated', () => {
  it('should not throw an error when all tab values are unique', () => {
    const tabs: BaseTabs = [
      [{ name: 'Tab 1', value: 'tab1', component: createElement(Identity) }],
      [{ name: 'Tab 2', value: 'tab2', component: createElement(Identity) }],
      [{ name: 'Tab 3', value: 'tab3', component: createElement(Identity) }],
    ];

    const result = validateIfDuplicated({ items: tabs });

    expect(result).toBeUndefined();
  });
  it('should throw a LogicException when there are duplicate tab values', async () => {
    const tabs: BaseTabs = [
      [{ name: 'Tab 1', value: 'tab1', component: createElement(Identity) }],
      [{ name: 'Tab 2', value: 'tab2', component: createElement(Identity) }],
      [{ name: 'Tab 3', value: 'tab1', component: createElement(Identity) }],
    ];

    try {
      validateIfDuplicated({ items: tabs });
    } catch (e) {
      if (e instanceof LogicException) {
        expect(e.message).toBe('Item value must be unique. Duplications: tab1');
      } else {
        throw e;
      }
    }
  });
  it('should not throw an error when all tab values are unique even if tabs is one-dimensional array', () => {
    const tabs: BaseTabs = [
      { name: 'Tab 1', value: 'tab1', component: createElement(Identity) },
      { name: 'Tab 2', value: 'tab2', component: createElement(Identity) },
      { name: 'Tab 3', value: 'tab3', component: createElement(Identity) },
    ];

    const result = validateIfDuplicated({ items: tabs });

    expect(result).toBeUndefined();
  });
});
