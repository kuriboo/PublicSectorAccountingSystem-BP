```tsx
import React from 'react';

interface Item {
  id: number;
  name: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
}

interface Props {
  title: string;
  items: Item[];
  onItemSelect: (item: Item) => void;
}

const AssetManagementTable: React.FC<Props> = ({ title, items, onItemSelect }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border border-gray-200 p-2">用語番号</th>
            <th className="border border-gray-200 p-2">名称</th>
            <th className="border border-gray-200 p-2">内容1</th>
            <th className="border border-gray-200 p-2">内容2</th>
            <th className="border border-gray-200 p-2">内容3</th>
            <th className="border border-gray-200 p-2">内容4</th>
            <th className="border border-gray-200 p-2">内容5</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-blue-100 cursor-pointer"
              onClick={() => onItemSelect(item)}
            >
              <td className="border border-gray-200 p-2">{item.id}</td>
              <td className="border border-gray-200 p-2">{item.name}</td>
              <td className="border border-gray-200 p-2">{item.content1}</td>
              <td className="border border-gray-200 p-2">{item.content2}</td>
              <td className="border border-gray-200 p-2">{item.content3}</td>
              <td className="border border-gray-200 p-2">{item.content4}</td>
              <td className="border border-gray-200 p-2">{item.content5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetManagementTable;
```