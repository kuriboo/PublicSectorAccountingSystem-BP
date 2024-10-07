import React from 'react';

// TypeScript interface for component props
interface DataTableProps {
  data: Array<{ date: string; type: string; description: string }>;
  title?: string;
}

// Reusable DataTable component
const DataTable: React.FC<DataTableProps> = ({ data, title }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="p-2 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
              <td className="p-2 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
              <td className="p-2 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage of the DataTable component
const data = [
  { date: '2001年3月', type: '線滞フラグ=1 "線滞データ"', description: '2000年までの入出庫数量の取りまとめ（次年度繰越）' },
  { date: '2001年4月', type: '線滞フラグ=0 "通常データ"', description: '2001年4月の通常入出庫数' },
  { date: '2001年5月', type: '線滞フラグ=0 "通常データ"', description: '2001年5月の通常入出庫数' },
  { date: '2001年6月', type: '線滞フラグ=0 "通常データ"', description: '2001年6月の通常入出庫数' },
  { date: '2001年7月', type: '線滞フラグ=0 "通常データ"', description: '2001年7月の通常入出庫数' },
  { date: '2001年9月', type: '線滞フラグ=0 "通常データ"', description: '2001年9月の通常入出庫数' },
  { date: '2001年10月', type: '線滞フラグ=0 "通常データ"', description: '2001年10月の通常入出庫数' },
];

// Export the component
export default function App() {
  return <DataTable data={data} title="Data Table" />;
}
