```tsx
import React from 'react';

interface BudgetInputProps {
  section: string;
  subsection: string;
  detail: string;
  budgetBelonging: string;
  taxDivision: string;
  amount: number;
  budgetRemaining: number;
  differenceSummary: string;
  onAmountChange: (value: number) => void;
  onDifferenceSummaryChange: (value: string) => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetInputComponent: React.FC<BudgetInputProps> = ({
  section,
  subsection,
  detail,
  budgetBelonging,
  taxDivision,
  amount,
  budgetRemaining,
  differenceSummary,
  onAmountChange,
  onDifferenceSummaryChange,
  onDelete,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>節</span>
          <span>{section}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>細節</span>
          <span>{subsection}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>明細</span>
          <span>{detail}</span>
        </div>
        <div className="flex justify-between mb-2 text-blue-600">
          <span>予算所属</span>
          <span>{budgetBelonging}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <span>税区分</span>
          <span>{taxDivision}</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">金額</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full p-2 border"
        />
      </div>

      <div className="mb-4 flex justify-between">
        <span>予算残額</span>
        <span>{budgetRemaining.toLocaleString()}</span>
      </div>

      <div className="mb-4">
        <label className="block mb-2">差引摘要</label>
        <input
          type="text"
          value={differenceSummary}
          onChange={(e) => onDifferenceSummaryChange(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      
      <div className="flex gap-2">
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded">削除</button>
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-black rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetInputComponent;
```