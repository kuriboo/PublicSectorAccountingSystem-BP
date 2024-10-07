// Import necessary libraries
import React from 'react';

// Define the type for the component props
type DataTableProps = {
  data: Array<{ name: string; amount: number }>;
  startDate: string;
  endDate: string;
};

// DataTable component definition
const DataTable: React.FC<DataTableProps> = ({ data, startDate, endDate }) => {
  // Calculate the total amount
  const totalAmount = data.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">特定収入使途分類</h2>
      <div className="flex justify-between mb-4">
        <span>課税期間: {startDate} ~ {endDate}</span>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">特定収入項目名称</th>
            <th className="py-2 px-4 border-b">特定収入額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b text-right">{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-2 px-4 border-t font-bold">合計額</td>
            <td className="py-2 px-4 border-t text-right font-bold">{totalAmount.toLocaleString()}円</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataTable;
