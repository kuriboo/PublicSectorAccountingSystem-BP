// components/BudgetSummary.tsx

import React from 'react';

// Define the type for the budget data
type BudgetData = {
  category: string;
  subCategory: string;
  itemName: string;
  amount1: number;
  amount2: number;
};

// Define the type for the component props
type BudgetSummaryProps = {
  data: BudgetData[];
  year: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ data, year, onConfirm, onCancel }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">科目別事務費按分準備処理</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <span>按分年度</span>
          <span className="border-b-2 border-gray-300">{year} 年度</span>
        </div>
        <button className="bg-gray-200 px-4 py-2 rounded">集計</button>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">予算性質</th>
            <th className="p-2">予算款</th>
            <th className="p-2">予算項</th>
            <th className="p-2">予算目</th>
            <th className="p-2">金額1</th>
            <th className="p-2">金額2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{entry.category}</td>
              <td className="p-2">{entry.subCategory}</td>
              <td className="p-2">{entry.itemName}</td>
              <td className="p-2">{entry.amount1.toLocaleString()}</td>
              <td className="p-2">{entry.amount2.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetSummary;