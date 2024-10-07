import React from 'react';

// 型定義
interface TaxDetailProps {
  title: string;
  subtitle: string;
  dateRange: string;
  rows: Array<{
    description: string;
    details: string[];
    amount: number;
    tax: number;
    total: number;
    note: string;
  }>;
}

const TaxDetail: React.FC<TaxDetailProps> = ({ title, subtitle, dateRange, rows }) => {
  return (
    <div className="m-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
      {/* ヘッダー */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm">{subtitle}</p>
        <p className="text-sm">{dateRange}</p>
      </div>

      {/* テーブル */}
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">説明</th>
            <th className="border border-gray-500 p-2">詳細</th>
            <th className="border border-gray-500 p-2">金額</th>
            <th className="border border-gray-500 p-2">消費税額</th>
            <th className="border border-gray-500 p-2">合計</th>
            <th className="border border-gray-500 p-2">備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-200">
              <td className="border border-gray-500 p-2">{row.description}</td>
              <td className="border border-gray-500 p-2">{row.details.join(', ')}</td>
              <td className="border border-gray-500 p-2 text-right">{row.amount.toLocaleString()}</td>
              <td className="border border-gray-500 p-2 text-right">{row.tax.toLocaleString()}</td>
              <td className="border border-gray-500 p-2 text-right">{row.total.toLocaleString()}</td>
              <td className="border border-gray-500 p-2">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxDetail;
```