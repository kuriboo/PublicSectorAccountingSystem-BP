```tsx
import React from 'react';

// データの型定義
type Record = {
  status: string;
  department: string;
  date: string;
  type: string;
  category: string;
  slipNo: string;
  description: string;
  approval: string;
  issue: string;
  amount: string;
};

// プロパティの型定義
type TableProps = {
  records: Record[];
};

// テーブルコンポーネント
const DataTable: React.FC<TableProps> = ({ records }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-800">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">電子決裁状況</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">所属</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">振替日</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">種別</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">伝票区分</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">伝票No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">摘要</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">締め</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">発行</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">入力額</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {records.map((record, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.status}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.department}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.type}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.slipNo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.description}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.approval}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.issue}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
```