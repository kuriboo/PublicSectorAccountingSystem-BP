import React from 'react';

type ItemCodeMappingTableProps = {
  items: Array<{
    code: string;
    categories: {
      large: string[];
      medium: string[];
      small: string[];
    };
  }>;
};

const ItemCodeMappingTable: React.FC<ItemCodeMappingTableProps> = ({ items }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-center mb-4 font-bold">単価コード貯蔵 品番対応表</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">品番:</span>
              <span>{item.code}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span>大分類:</span>
                {item.categories.large.map((category, idx) => (
                  <span key={idx} className="bg-white p-1 rounded-md shadow">{category}</span>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span>中分類:</span>
                {item.categories.medium.map((category, idx) => (
                  <span key={idx} className="bg-white p-1 rounded-md shadow">{category}</span>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span>小分類:</span>
                {item.categories.small.map((category, idx) => (
                  <span key={idx} className="bg-white p-1 rounded-md shadow">{category}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCodeMappingTable;
```