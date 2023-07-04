export const a11yProps = (prefix: string, index: number | string) => {
  return {
    id: `simple-tab-${prefix}-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
