import React from 'react';

type BudgetEntry = {
  accountCode: string;
  accountName: string;
  budgetAmount: number;
  currentAmount: number;
  budgetDecisionAmount: number;
};

type BudgetTableProps = {
  entries: BudgetEntry[];
  onEdit: (accountCode: string) => void;
};

const BudgetTable: React.FC<BudgetTableProps> = ({ entries, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <table className="min-w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">科目コード</th>
            <th className="border px-4 py-2">科目名称</th>
            <th className="border px-4 py-2">予算現額</th>
            <th className="border px-4 py-2">現在決算額</th>
            <th className="border px-4 py-2">決算見込額</th>
            <th className="border px-4 py-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.accountCode}>
              <td className="border px-4 py-2">{entry.accountCode}</td>
              <td className="border px-4 py-2">{entry.accountName}</td>
              <td className="border px-4 py-2 text-right">{entry.budgetAmount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{entry.currentAmount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{entry.budgetDecisionAmount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(entry.accountCode)}
                >
                  編集
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
