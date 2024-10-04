```tsx
import React, { FC } from 'react';

interface AssetTableProps {
  assetNumber: string;
  assetName: string;
  rows: Array<{
    date: string;
    flag: string;
    division: string;
    summary: string;
    amount: number;
    rate: number;
    limit: number;
    years: number;
    rateOfRemaining: number;
    remainingAmount: number;
  }>;
}

const AssetTable: FC<AssetTableProps> = ({ assetNumber, assetName, rows }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Header Information */}
      <div className="mb-4 text-blue-700">
        <h1 className="text-xl font-bold">資産番号: {assetNumber}</h1>
        <h2 className="text-lg">資産名称: {assetName}</h2>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">異動年月日</th>
            <th className="border border-gray-300 p-2">僅知異動フラグ</th>
            <th className="border border-gray-300 p-2">異動区分</th>
            <th className="border border-gray-300 p-2">異動摘要</th>
            <th className="border border-gray-300 p-2">異動金額</th>
            <th className="border border-gray-300 p-2">僅知限度率</th>
            <th className="border border-gray-300 p-2">僅知限度額</th>
            <th className="border border-gray-300 p-2">耐用年数</th>
            <th className="border border-gray-300 p-2">残存率</th>
            <th className="border border-gray-300 p-2">残存価額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-blue-50">
              <td className="border border-gray-300 p-2">{row.date}</td>
              <td className="border border-gray-300 p-2">{row.flag}</td>
              <td className="border border-gray-300 p-2">{row.division}</td>
              <td className="border border-gray-300 p-2">{row.summary}</td>
              <td className="border border-gray-300 p-2">{row.amount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{row.rate.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{row.limit}</td>
              <td className="border border-gray-300 p-2">{row.years}</td>
              <td className="border border-gray-300 p-2">{row.rateOfRemaining.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{row.remainingAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
```