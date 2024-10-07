import React from 'react';

// 型定義
interface AssetProps {
  assetNumber: string;
  assetName: string;
  records: Record[];
}

interface Record {
  date: string;
  code: string;
  name: string;
  category: string;
  amount: number;
}

// コンポーネント定義
const AssetTable: React.FC<AssetProps> = ({ assetNumber, assetName, records }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* 資産情報 */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">資産番号: {assetNumber}</h2>
        <h3 className="text-md">資産名称: {assetName}</h3>
      </div>
      
      {/* テーブル */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">異動年月日</th>
            <th className="px-4 py-2">財源コード</th>
            <th className="px-4 py-2">財源名称</th>
            <th className="px-4 py-2">債却区分</th>
            <th className="px-4 py-2">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{record.date}</td>
              <td className="px-4 py-2">{record.code}</td>
              <td className="px-4 py-2">{record.name}</td>
              <td className="px-4 py-2">{record.category}</td>
              <td className="px-4 py-2">{record.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssetTable;
```