```tsx
import React from 'react';

// 型定義
type ExpenseFormProps = {
  budgetItem: string;
  budgetSection: string;
  budgetSubsection: string;
  budgetDetail: string;
  taxCategory: string;
  revenueCategory: string;
  consumptionTaxRate: number;
  decisionAmount: number;
  taxAmount: number;
  pendingAmount: number;
  onApprove: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  budgetItem,
  budgetSection,
  budgetSubsection,
  budgetDetail,
  taxCategory,
  revenueCategory,
  consumptionTaxRate,
  decisionAmount,
  taxAmount,
  pendingAmount,
  onApprove,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md">
      {/* 予算科目 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-bold">予算科目</h2>
          <p>{budgetItem}</p>
          <p>{budgetSection}</p>
          <p>{budgetSubsection}</p>
          <p>{budgetDetail}</p>
        </div>
        {/* 予算残情報 */}
        <div>
          <h2 className="font-bold">予算残情報</h2>
          <p>予算現額: {decisionAmount}</p>
          <p>負担累計: {taxAmount}</p>
          <p>負担残額: {pendingAmount}</p>
          <p>予定累計: 0</p>
          <p>予定残額: {pendingAmount}</p>
        </div>
      </div>

      {/* 消費税率 */}
      <h3 className="mt-4">消費税率: {consumptionTaxRate.toFixed(2)}%</h3>

      {/* 決定金額と消費税額 */}
      <div className="flex items-center mt-2">
        <label className="mr-2">決定金額:</label>
        <input
          type="number"
          value={decisionAmount}
          className="mr-4 border p-1"
          readOnly
        />
        <label className="mr-2">消費税額:</label>
        <input type="number" value={taxAmount} className="border p-1" readOnly />
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4">
        <button onClick={onApprove} className="px-3 py-1 bg-blue-500 text-white mr-2">
          OK
        </button>
        <button onClick={onClear} className="px-3 py-1 bg-gray-500 text-white mr-2">
          クリア
        </button>
        <button onClick={onCancel} className="px-3 py-1 bg-red-500 text-white">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
```