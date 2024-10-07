import React from 'react';

interface BudgetInputProps {
  budgetSection: string;
  budgetDetail: string;
  taxAmount: number;
  taxRate: number;
  totalAmount: number;
  onApprove: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({
  budgetSection,
  budgetDetail,
  taxAmount,
  taxRate,
  totalAmount,
  onApprove,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-lg">
      <div className="mb-4">
        <h3 className="font-bold text-xl">予算科目</h3>
        <div className="text-sm">
          <div>予算節: <span>{budgetSection}</span></div>
          <div>予算明細: <span>{budgetDetail}</span></div>
        </div>
      </div>
      
      <div className="mb-4">
        <div>税区分: 課税</div>
        <div>税抜額: {taxAmount.toLocaleString()}</div>
        <div>消費税率: {taxRate}%</div>
        <div>消費税額: {(taxAmount * (taxRate / 100)).toLocaleString()}</div>
        <div>予定額: {totalAmount.toLocaleString()}</div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={onApprove} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetInput;
```