export type TabType = {
  value: string;
  name: string;
  component: JSX.Element;
};

export type BaseTabs =
  | ReadonlyArray<TabType>
  | ReadonlyArray<ReadonlyArray<TabType>>;

export type TabRows<T extends BaseTabs> = T extends ReadonlyArray<TabType>
  ? ReadonlyArray<T>
  : T extends ReadonlyArray<ReadonlyArray<TabType>>
  ? T
  : never;
export type FlatTabs<T extends BaseTabs> = TabRows<T>[number];

export type Tab<T extends BaseTabs> = FlatTabs<T>[number];

type Value<T extends BaseTabs> = Tab<T>['value'];

export type TabContainerProps<T extends BaseTabs> = {
  value: Value<T>;
  tabs: T;
  handleChange: (value: Value<T>) => void;
};
