// components/InventoryTable.tsx

import React from 'react';

// Define TypeScript interfaces for the component props
interface InventoryItem {
  productName: string;
  unit: string;
  unitPrice: number;
  quantity: number;
  total: number;
}

interface InventoryTableProps {
  items: InventoryItem[];
  date: string;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ items, date }) => {
  return (
    <div className="overflow-x-auto border rounded-lg p-4 bg-gray-50">
      <h2 className="text-xl font-bold mb-2 text-center">棚卸表</h2>
      <p className="text-sm text-right mb-4">平成{date}日</p>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">品名</th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">単位</th>
            <th className="px-6 py-3 bg-gray-100 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">単価</th>
            <th className="px-6 py-3 bg-gray-100 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">帳簿残高</th>
            <th className="px-6 py-3 bg-gray-100 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.unitPrice.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.total.toLocaleString()}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-gray-900">計</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right text-gray-900">
              {items.reduce((acc, item) => acc + item.total, 0).toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
```