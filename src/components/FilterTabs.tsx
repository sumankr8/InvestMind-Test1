import React from 'react';

type AssetType = 'all' | 'stocks' | 'crypto' | 'funds';

interface FilterTabsProps {
  activeFilter: AssetType;
  setActiveFilter: (filter: AssetType) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeFilter, setActiveFilter }) => {
  const tabs: { id: AssetType; label: string }[] = [
    { id: 'all', label: 'All Assets' },
    { id: 'stocks', label: 'Stocks' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'funds', label: 'Funds' }
  ];

  return (
    <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 text-sm rounded-md transition-all ${
            activeFilter === tab.id
              ? 'bg-gray-700 text-white shadow-sm'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          onClick={() => setActiveFilter(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;