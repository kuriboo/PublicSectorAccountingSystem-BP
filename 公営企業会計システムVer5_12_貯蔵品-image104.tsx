```tsx
import React from 'react';

type CategoryItem = {
  size: 'large' | 'medium' | 'small';
  label: string;
  status: 'circle' | 'square' | 'triangle';
};

type StorageCategoryProps = {
  title: string;
  items: CategoryItem[];
};

const StorageCategory: React.FC<StorageCategoryProps> = ({ title, items }) => {
  // Function to get the appropriate icon based on the status
  const getStatusIcon = (status: 'circle' | 'square' | 'triangle') => {
    switch (status) {
      case 'circle':
        return '◯';
      case 'square':
        return '□';
      case 'triangle':
        return '△';
    }
  };

  return (
    <div className="p-4 bg-gray-300 border border-gray-400">
      {/* Title of the component */}
      <h1 className="text-center font-semibold mb-2">{title}</h1>

      {/* List of category items */}
      <ul className="list-none">
        {items.map((item, index) => (
          <li key={index} className="mb-1">
            {/* Display size category and status icons */}
            <span className={`font-bold ${item.size === 'large' ? 'mr-2' : 'mr-1'}`}>
              {item.size === 'large' ? '大分類' : item.size === 'medium' ? '中分類' : '小分類'}
            </span>
            {Array.from({ length: 3 }, (_, i) => (
              <span key={i} className="mr-1">
                {getStatusIcon(item.status)}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StorageCategory;
```