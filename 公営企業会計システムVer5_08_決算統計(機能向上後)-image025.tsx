```tsx
import React from 'react';

// TypeScript interface for component props
interface TableProps {
  data: Array<{
    code: string;
    name: string;
    taxAmount: number;
    consumptionTaxAmount: number;
    totalAmount: number;
  }>;
}

// A reusable component for displaying table rows
const BudgetTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse text-sm">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="border p-2">予算款コード</th>
          <th className="border p-2">予算款名称</th>
          <th className="border p-2">税抜額(円)</th>
          <th className="border p-2">消費税額(円)</th>
          <th className="border p-2">税込額(円)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="even:bg-gray-100">
            <td className="border p-2 text-center">{item.code}</td>
            <td className="border p-2">{item.name}</td>
            <td className="border p-2 text-right">{item.taxAmount.toLocaleString()}</td>
            <td className="border p-2 text-right">{item.consumptionTaxAmount.toLocaleString()}</td>
            <td className="border p-2 text-right">{item.totalAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage of the component with data
const MockComponent = () => {
  const mockData = [
    {
      code: '001',
      name: '公共下水道事業収益',
      taxAmount: 886624415,
      consumptionTaxAmount: 20687544,
      totalAmount: 907311959,
    },
    // Add more data as necessary
  ];

  return (
    <div className="p-4">
      <BudgetTable data={mockData} />
    </div>
  );
};

export default MockComponent;
```