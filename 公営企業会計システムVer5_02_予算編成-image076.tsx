```tsx
import React from 'react';

// TypeScript props typing
interface BudgetComponentProps {
  fiscalYear: string;
  budgetCategory: string;
  finalConfirmation: string;
  confirmationCount: number;
  onOk: () => void;
  onCancel: () => void;
}

// BudgetComponent definition
const BudgetComponent: React.FC<BudgetComponentProps> = ({
  fiscalYear,
  budgetCategory,
  finalConfirmation,
  confirmationCount,
  onOk,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 p-2 rounded shadow-sm">
        <h1 className="text-xl font-bold text-center mb-4">予算税区分集計</h1>
      </div>
      <div className="mt-4 border rounded shadow-md p-4">
        <h2 className="text-lg font-bold mb-2">範囲指定</h2>
        <div className="mb-2">
          <span className="font-bold">会計年度: </span>
          <span>{fiscalYear}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">予算編成区分: </span>
          <span>{budgetCategory}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">最終査定値: </span>
          <span>
            {finalConfirmation} {confirmationCount}回
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```