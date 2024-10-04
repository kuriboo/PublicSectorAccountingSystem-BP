```tsx
import React from 'react';

// TypeScript interface for component props
interface BudgetFormProps {
  budgetItem?: string;
  budgetDetailSection?: string;
  budgetDetailName?: string;
  taxDivision?: string;
  plannedAmount?: number;
  burdenAmount?: number;
  taxAmount?: number;
  consumptionTaxRate?: number;
  consumptionTaxAmount?: number;
  remainingBudgetInfo?: {
    section?: string;
    currentAmount?: number;
    totalBurden?: number;
    remainingBurden?: number;
  };
  onSearchClick?: () => void;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onCancelClick?: () => void;
}

// React component with Tailwind CSS for styling
const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetItem = '配改・工事請負費',
  budgetDetailSection = '00401 0028',
  budgetDetailName = '配水管新設工事',
  taxDivision = '課税',
  plannedAmount = 1100000,
  burdenAmount = 1100000,
  taxAmount = 1000000,
  consumptionTaxRate = 10,
  consumptionTaxAmount = 100000,
  remainingBudgetInfo = {
    section: '節',
    currentAmount: 229190000,
    totalBurden: 1100000,
    remainingBurden: 228090000,
  },
  onSearchClick,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => (
  <div className="p-4 border border-gray-400 rounded shadow">
    <div className="flex justify-between">
      <div className="w-1/2">
        <h2 className="font-bold">予算科目</h2>
        <div className="flex">
          <div>{budgetDetailSection}</div>
          <div className="ml-2 bg-blue-200">{budgetDetailName}</div>
        </div>
        <button 
          className="mt-2 px-4 py-1 bg-gray-300 rounded" 
          onClick={onSearchClick}
        >
          科目検索
        </button>
      </div>
      <div className="w-1/2">
        <h2 className="font-bold">予算残情報</h2>
        <div>節: {remainingBudgetInfo.section}</div>
        <div>予算現額: {remainingBudgetInfo.currentAmount.toLocaleString()}</div>
        <div>負担累計: {remainingBudgetInfo.totalBurden.toLocaleString()}</div>
        <div>負担残額: {remainingBudgetInfo.remainingBurden.toLocaleString()}</div>
      </div>
    </div>
    <div className="mt-4">
      <div>税区分: {taxDivision}</div>
    </div>
    <div className="mt-4 flex">
      <div className="w-1/2">
        <div>予定額: {plannedAmount.toLocaleString()}</div>
        <div>税抜額: {taxAmount.toLocaleString()}</div>
        <div>消費税率: {consumptionTaxRate}%</div>
        <div>消費税額: {consumptionTaxAmount.toLocaleString()}</div>
      </div>
      <div className="w-1/2">
        <div>負担額: {burdenAmount.toLocaleString()}</div>
      </div>
    </div>
    <div className="mt-4 flex space-x-2">
      <button 
        className="px-4 py-1 bg-gray-300 rounded" 
        onClick={onOkClick}
      >
        OK
      </button>
      <button 
        className="px-4 py-1 bg-gray-300 rounded" 
        onClick={onClearClick}
      >
        クリア
      </button>
      <button 
        className="px-4 py-1 bg-gray-300 rounded" 
        onClick={onCancelClick}
      >
        キャンセル
      </button>
    </div>
  </div>
);

export default BudgetForm;
```