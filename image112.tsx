import React from 'react';

// Props type definition
type DataTableProps = {
  data: { date: string; flag: number; type: string; description: string }[];
};

// Reusable DataTable component
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
            Date
          </th>
          <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
            Flag
          </th>
          <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
            Type
          </th>
          <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">
              {item.date}
            </td>
            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">
              {item.flag}
            </td>
            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">
              {item.type}
            </td>
            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-900">
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

// Sample data
const sampleData = [
  {
    date: '2001年3月',
    flag: 1,
    type: '繰越データ',
    description: '2000年までの入出庫数量の取りまとめ（次年度繰越）',
  },
  {
    date: '2001年4月',
    flag: 0,
    type: '通常データ',
    description: '2001年4月の通常入出庫数',
  },
  {
    date: '2001年5月',
    flag: 0,
    type: '通常データ',
    description: '2001年5月の通常入出庫数',
  },
  {
    date: '2001年6月',
    flag: 0,
    type: '通常データ',
    description: '2001年6月の通常入出庫数',
  },
  {
    date: '2001年9月',
    flag: 0,
    type: '通常データ',
    description: '2001年9月の通常入出庫数',
  },
  {
    date: '2001年10月',
    flag: 0,
    type: '通常データ',
    description: '2001年10月の通常入出庫数',
  },
];

// Usage example
/*
<DataTable data={sampleData} />
*/