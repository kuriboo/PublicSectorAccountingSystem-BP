// BudgetAdjustmentForm.tsx
import React from 'react';

// TypeScript props definition
interface BudgetAdjustmentFormProps {
  fiscalYear: string;
  budgetDivision: string;
  finalApprovalValue: string;
  approvalCount: number;
  onOk: () => void;
  onClose: () => void;
}

const BudgetAdjustmentForm: React.FC<BudgetAdjustmentFormProps> = ({
  fiscalYear,
  budgetDivision,
  finalApprovalValue,
  approvalCount,
  onOk,
  onClose,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">予算調整割合算定</h1>
      <div className="border rounded-md p-4 mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="text-sm">
          <p>
            <span className="font-semibold">会計年度: </span>
            {fiscalYear}
          </p>
          <p>
            <span className="font-semibold">予算編成区分: </span>
            {budgetDivision}
          </p>
          <p>
            <span className="font-semibold">最終査定値: </span>
            {finalApprovalValue} {approvalCount} 回
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default BudgetAdjustmentForm;
