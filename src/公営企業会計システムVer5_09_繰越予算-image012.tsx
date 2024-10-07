// components/BudgetInput.tsx

import React from 'react';

type BudgetInputProps = {
  fiscalYear: string;
  plannedYears: { year: string; number: number }[];
  rows: {
    id: number;
    plannedYear: string;
    year: number;
    budgetName: string;
    budgetDetail: string;
    amount: number;
    settledAmount: number;
    processingAmount: number;
    operatorName: string;
  }[];
};

export const BudgetInput: React.FC<BudgetInputProps> = ({ fiscalYear, plannedYears, rows }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header Section */}
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">予算繰越入力</h1>
        <p>当期会計年度: {fiscalYear}</p>
      </div>
      
      {/* Buttons */}
      <div className="flex mb-2">
        <button className="mr-2 px-4 py-2 bg-gray-300 rounded">編集</button>
        <button className="px-4 py-2 bg-gray-300 rounded">行削除</button>
      </div>

      {/* Table */}
      <table className="w-full mb-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-purple-200">
            <th className="border border-gray-400 px-2 py-1">予定年度</th>
            <th className="border border-gray-400 px-2 py-1">予定番号</th>
            <th className="border border-gray-400 px-2 py-1">負担年度</th>
            <th className="border border-gray-400 px-2 py-1">負担番号</th>
            <th className="border border-gray-400 px-2 py-1">予算節</th>
            <th className="border border-gray-400 px-2 py-1">予算細節</th>
            <th className="border border-gray-400 px-2 py-1">未処理額</th>
            <th className="border border-gray-400 px-2 py-1">保越額</th>
            <th className="border border-gray-400 px-2 py-1">繰越区分</th>
            <th className="border border-gray-400 px-2 py-1">業者名</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-400 px-2 py-1">{row.plannedYear}</td>
              <td className="border border-gray-400 px-2 py-1">{row.year}</td>
              <td className="border border-gray-400 px-2 py-1">{row.year}</td>
              <td className="border border-gray-400 px-2 py-1">{row.year}</td>
              <td className="border border-gray-400 px-2 py-1">{row.budgetName}</td>
              <td className="border border-gray-400 px-2 py-1">{row.budgetDetail}</td>
              <td className="border border-gray-400 px-2 py-1">{row.amount}</td>
              <td className="border border-gray-400 px-2 py-1">{row.settledAmount}</td>
              <td className="border border-gray-400 px-2 py-1">{row.processingAmount}</td>
              <td className="border border-gray-400 px-2 py-1">{row.operatorName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detail Section */}
      <div className="bg-white p-4">
        <h2 className="text-lg font-bold mb-2">詳細情報</h2>
        {/* Additional details and controls can be implemented here */}
        {/* For simplicity, skipping detailed form fields implementation */}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button className="mr-2 px-4 py-2 bg-green-300 rounded">行確定</button>
        <button className="mr-2 px-4 py-2 bg-yellow-300 rounded">行キャンセル</button>
        <button className="px-4 py-2 bg-red-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetInput;
