import React from 'react';
import 'tailwindcss/tailwind.css';

// Type definitions for the props
type BudgetStatusProps = {
  year: string;
  currentStatus: string;
  budgetItems: BudgetItem[];
};

type BudgetItem = {
  division: string;
  request: string;
  status: string;
  department: string;
};

const BudgetStatus: React.FC<BudgetStatusProps> = ({ year, currentStatus, budgetItems }) => {
  return (
    <div className="p-4 bg-white shadow-md">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">予算編成登録状況照会</h1>
        <p className="text-gray-500">年度: {year}</p>
      </div>

      {/* Current status section */}
      <div className="mb-4 p-2 border rounded-md">
        <p className="text-center font-bold">現在の予算編成登録状況</p>
        <p className="text-center text-red-600">{currentStatus}</p>
      </div>

      {/* Budget items table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="border p-2">予算編成区分</th>
            <th className="border p-2">要求/査定</th>
            <th className="border p-2">状況</th>
            <th className="border p-2">所属</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="border p-2">{item.division}</td>
              <td className="border p-2">{item.request}</td>
              <td className="border p-2">{item.status}</td>
              <td className="border p-2">{item.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetStatus;
```