import React from 'react';

// TypeScript type definitions for properties
interface BudgetEntryProps {
  title: string;
  date: string;
  categories: Array<{
    section: string;
    subSection: string;
    detail: string;
    budgetAttribute: string;
    usageDivision: string;
    amount: number;
  }>;
}

// BudgetEntry component using Tailwind CSS
const BudgetEntry: React.FC<BudgetEntryProps> = ({ title, date, categories }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Title and Date */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm text-gray-600">{date}</span>
      </div>

      {/* Categories Table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-blue-500 text-white">
            <th className="py-2 px-4">節</th>
            <th className="py-2 px-4">細節</th>
            <th className="py-2 px-4">明細</th>
            <th className="py-2 px-4">予算所属</th>
            <th className="py-2 px-4">細節流用区分</th>
            <th className="py-2 px-4">金額</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{category.section}</td>
              <td className="border px-4 py-2">{category.subSection}</td>
              <td className="border px-4 py-2">{category.detail}</td>
              <td className="border px-4 py-2">{category.budgetAttribute}</td>
              <td className="border px-4 py-2">{category.usageDivision}</td>
              <td className="border px-4 py-2">{category.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-end space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">OK</button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">クリア</button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default BudgetEntry;
```