```tsx
import React from 'react';

type BudgetTableProps = {
  title: string;
  date: string;
  budgetData: {
    sectionNumber: string;
    sectionName: string;
    budgetAmount: number;
    executionAmount: number;
    remainingAmount: number;
  };
  transactions: Array<{
    day: number;
    process: string;
    description: string;
    number: number;
    executionAmount: number;
    taxIncludedAmount: number;
  }>;
};

const BudgetTable: React.FC<BudgetTableProps> = ({
  title,
  date,
  budgetData,
  transactions
}) => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex justify-between items-center bg-gray-200 p-2 rounded">
        <span>{date}</span>
        <div>
          <p>節: {budgetData.sectionNumber} {budgetData.sectionName}</p>
          <p>予算現額: {budgetData.budgetAmount.toLocaleString()}</p>
          <p>執行額: {budgetData.executionAmount.toLocaleString()}</p>
          <p>執行残額: {budgetData.remainingAmount.toLocaleString()}</p>
        </div>
      </div>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-purple-200 text-left">
            <th className="p-2 border">日</th>
            <th className="p-2 border">処理</th>
            <th className="p-2 border">摘要</th>
            <th className="p-2 border">番号</th>
            <th className="p-2 border">執行額</th>
            <th className="p-2 border">内消費税額</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border">{transaction.day}</td>
              <td className="p-2 border">{transaction.process}</td>
              <td className="p-2 border">{transaction.description}</td>
              <td className="p-2 border">{transaction.number}</td>
              <td className="p-2 border">{transaction.executionAmount.toLocaleString()}</td>
              <td className="p-2 border">{transaction.taxIncludedAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-2 rounded">クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetTable;
```