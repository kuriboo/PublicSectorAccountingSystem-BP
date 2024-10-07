import React from 'react';

// タイプ定義
type BudgetEntry = {
  section: string;
  subSection: string;
  detail: string;
  department: string;
  amount: number;
  remainingBudget: number;
};

type BudgetFormProps = {
  year: string;
  entryNumber: number;
  entryDate: string;
  summary: string;
  increaseEntries: BudgetEntry[];
  decreaseEntries: BudgetEntry[];
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント定義
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  entryNumber,
  entryDate,
  summary,
  increaseEntries,
  decreaseEntries,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      <h1 className="text-lg font-bold text-blue-700">予算流用充用日締解除入力</h1>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <span>年度:</span>
          <span className="font-semibold">{year}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>流用充用番号:</span>
          <span className="font-semibold">{entryNumber}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>流用充用日:</span>
          <span className="font-semibold">{entryDate}</span>
        </div>
        <div>
          <span>摘要:</span>
          <span className="font-semibold">{summary}</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold border-b">増額科目</h3>
        <table className="min-w-full mt-2">
          <thead className="bg-blue-200">
            <tr>
              <th>節</th>
              <th>細節</th>
              <th>明細</th>
              <th>予算所属</th>
              <th>金額</th>
              <th>予算残額</th>
            </tr>
          </thead>
          <tbody>
            {increaseEntries.map((entry, index) => (
              <tr key={index} className="border-b">
                <td>{entry.section}</td>
                <td>{entry.subSection}</td>
                <td>{entry.detail}</td>
                <td>{entry.department}</td>
                <td>{entry.amount.toLocaleString()}</td>
                <td>{entry.remainingBudget.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold border-b">減額科目</h3>
        <table className="min-w-full mt-2">
          <thead className="bg-blue-200">
            <tr>
              <th>節</th>
              <th>細節</th>
              <th>明細</th>
              <th>予算所属</th>
              <th>金額</th>
              <th>予算残額</th>
            </tr>
          </thead>
          <tbody>
            {decreaseEntries.map((entry, index) => (
              <tr key={index} className="border-b">
                <td>{entry.section}</td>
                <td>{entry.subSection}</td>
                <td>{entry.detail}</td>
                <td>{entry.department}</td>
                <td>{entry.amount.toLocaleString()}</td>
                <td>{entry.remainingBudget.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 rounded-md">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-red-300 rounded-md">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-yellow-300 rounded-md">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```