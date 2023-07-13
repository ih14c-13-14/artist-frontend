import { useState } from 'react';

import { TabContainer } from '@/features/ui/TabContainer';

import { Arts } from './Arts';
import { Authors } from './Authors';

const Search = () => {
  const [activeTab, setActiveTab] = useState('arts');
  const tabs = [
    { name: 'アート作品', value: 'arts', component: <Arts /> },
    { name: '作者', value: 'authors', component: <Authors /> },
    { name: 'お気に入り', value: 'favorite', component: <Arts /> },
  ];

  return (
    <TabContainer value={activeTab} tabs={tabs} handleChange={setActiveTab} />
  );
};

export default Search;
