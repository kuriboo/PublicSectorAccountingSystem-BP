import React from 'react';

interface TableProps {
  data: Array<{
    category: string;
    amount: number;
    total: number;
    details: number;
    years: Array<number>;
  }>;
}

const FinanceTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-left">区分名称</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left">金額</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left">累計</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left">詳細</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left">年度</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b border-gray-300">{row.category}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.amount.toLocaleString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.total.toLocaleString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.details}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.years.join(' / ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceTable;
```