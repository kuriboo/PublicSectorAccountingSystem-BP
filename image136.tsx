```tsx
import React from 'react';

type AssetTableProps = {
  assetNumber: string;
  assetName: string;
  entries: {
    date: string;
    code: string;
    name: string;
    division: string;
    amount: string;
  }[];
};

const AssetTable: React.FC<AssetTableProps> = ({ assetNumber, assetName, entries }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex justify-between mb-4">
        <div className="text-lg font-bold">資産番号: {assetNumber}</div>
        <div className="text-lg font-bold">資産名称: {assetName}</div>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">異動年月日</th>
            <th className="border p-2 text-left">財源コード</th>
            <th className="border p-2 text-left">財源名称</th>
            <th className="border p-2 text-left">償却区分</th>
            <th className="border p-2 text-left">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{entry.date}</td>
              <td className="border p-2">{entry.code}</td>
              <td className="border p-2">{entry.name}</td>
              <td className="border p-2">{entry.division}</td>
              <td className="border p-2">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
```