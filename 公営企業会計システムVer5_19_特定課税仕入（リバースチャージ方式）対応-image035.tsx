```tsx
import React from 'react';

// 型定義
interface TaxDetail {
  category: string;
  date: string;
  amount: number;
  tax: number;
  total: number;
  remarks: string;
}

interface TaxReportProps {
  title: string;
  entries: TaxDetail[];
}

// コンポーネント実装
const TaxReport: React.FC<TaxReportProps> = ({ title, entries }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-200">項目</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">日付</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">金額</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">消費税</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">合計</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">備考</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">{entry.category}</td>
              <td className="border px-4 py-2 text-center">{entry.date}</td>
              <td className="border px-4 py-2 text-right">{entry.amount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{entry.tax.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{entry.total.toLocaleString()}</td>
              <td className="border px-4 py-2">{entry.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxReport;
```