```tsx
import React from 'react';

// 型定義
interface DataItem {
  category: string;
  item: string;
  taxedAmount3: string;
  taxExemptAmount3: string;
  taxedAmount4: string;
  taxExemptAmount4: string;
  taxedAmount6: string;
  taxExemptAmount6: string;
}

interface DataTableProps {
  data: DataItem[];
}

// DataTableコンポーネント
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">予算区分</th>
            <th className="py-3 px-6 text-left">項目</th>
            <th className="py-3 px-6 text-right">課税額3.00%</th>
            <th className="py-3 px-6 text-right">税抜課税額3.00%</th>
            <th className="py-3 px-6 text-right">課税額4.00%</th>
            <th className="py-3 px-6 text-right">税抜課税額4.00%</th>
            <th className="py-3 px-6 text-right">課税額6.00%</th>
            <th className="py-3 px-6 text-right">税抜課税額6.00%</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.category}</td>
              <td className="py-3 px-6 text-left">{item.item}</td>
              <td className="py-3 px-6 text-right">{item.taxedAmount3}</td>
              <td className="py-3 px-6 text-right">{item.taxExemptAmount3}</td>
              <td className="py-3 px-6 text-right">{item.taxedAmount4}</td>
              <td className="py-3 px-6 text-right">{item.taxExemptAmount4}</td>
              <td className="py-3 px-6 text-right">{item.taxedAmount6}</td>
              <td className="py-3 px-6 text-right">{item.taxExemptAmount6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```