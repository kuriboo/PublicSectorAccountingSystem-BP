```tsx
// components/FinancialStatement.tsx

import React from 'react';

type FinancialStatementProps = {
  assetsName: string;
  assetsNumber: string;
  date: string;
  categories: { name: string; pendingAmount: number; annualAmount: number }[];
  totals: { pending: number; annual: number };
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FinancialStatement: React.FC<FinancialStatementProps> = ({
  assetsName,
  assetsNumber,
  date,
  categories,
  totals,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <div className="flex justify-between mb-4">
        <div>
          <p>資産番号: {assetsNumber}</p>
          <p>資産名称: {assetsName}</p>
        </div>
        <p>異動年月日: {date}</p>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">財源名称</th>
            <th className="border border-gray-300 p-2">借却限度額</th>
            <th className="border border-gray-300 p-2">年間借却額</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{category.name}</td>
              <td className="border border-gray-300 p-2">{category.pendingAmount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{category.annualAmount.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="font-bold text-center">
            <td className="border border-gray-300 p-2">合計</td>
            <td className="border border-gray-300 p-2">{totals.pending.toLocaleString()}</td>
            <td className="border border-gray-300 p-2">{totals.annual.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinancialStatement;
```