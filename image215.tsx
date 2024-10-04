```tsx
// Import necessary modules and components
import React from 'react';

// Define types for props
type BudgetItem = {
  section: string;
  detail: string;
  description: string;
  budgetDepartment: string;
  amount: number;
  remainingBudget: number;
};

type BudgetDetailProps = {
  fiscalYear: string;
  usageDate: string;
  usageDivision: string;
  proposalDepartment: string;
  proposer: string;
  summary: string;
  increaseItems: BudgetItem[];
  decreaseItems: BudgetItem[];
};

// Define a reusable BudgetDetail component
const BudgetDetail: React.FC<BudgetDetailProps> = ({
  fiscalYear,
  usageDate,
  usageDivision,
  proposalDepartment,
  proposer,
  summary,
  increaseItems,
  decreaseItems,
}) => {
  // Render component
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <h2 className="text-xl mb-2">流用専用詳細</h2>
        <p>年度: {fiscalYear}</p>
        <p>流用充用日: {usageDate}</p>
        <p>流用充用区分: {usageDivision}</p>
        <p>起案所属: {proposalDepartment}</p>
        <p>起案者: {proposer}</p>
        <p>摘要: {summary}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-2">増額科目</h3>
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border px-2 py-1">節</th>
              <th className="border px-2 py-1">細節</th>
              <th className="border px-2 py-1">明細</th>
              <th className="border px-2 py-1">予算所属</th>
              <th className="border px-2 py-1">金額</th>
              <th className="border px-2 py-1">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {increaseItems.map((item, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-2 py-1">{item.section}</td>
                <td className="border px-2 py-1">{item.detail}</td>
                <td className="border px-2 py-1">{item.description}</td>
                <td className="border px-2 py-1">{item.budgetDepartment}</td>
                <td className="border px-2 py-1">{item.amount.toLocaleString()}</td>
                <td className="border px-2 py-1">{item.remainingBudget.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-2">減額科目</h3>
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border px-2 py-1">節</th>
              <th className="border px-2 py-1">細節</th>
              <th className="border px-2 py-1">明細</th>
              <th className="border px-2 py-1">予算所属</th>
              <th className="border px-2 py-1">金額</th>
              <th className="border px-2 py-1">予算残額</th>
            </tr>
          </thead>
          <tbody>
            {decreaseItems.map((item, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-2 py-1">{item.section}</td>
                <td className="border px-2 py-1">{item.detail}</td>
                <td className="border px-2 py-1">{item.description}</td>
                <td className="border px-2 py-1">{item.budgetDepartment}</td>
                <td className="border px-2 py-1">{item.amount.toLocaleString()}</td>
                <td className="border px-2 py-1">{item.remainingBudget.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button className="mr-2 px-4 py-2 bg-gray-200 rounded">再発行</button>
        <button className="px-4 py-2 bg-gray-200 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetDetail;
```