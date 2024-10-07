import React from 'react';

// Interface for component props
interface FormProps {
  budgetItem: string;
  budgetSection: string;
  budgetDetail: string;
  budgetSubDetail: string;
  taxType: string;
  incomeType: string;
  transferAmount: number;
  actualAmount: number;
  taxRate: number;
  taxAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BudgetForm: React.FC<FormProps> = ({
  budgetItem,
  budgetSection,
  budgetDetail,
  budgetSubDetail,
  taxType,
  incomeType,
  transferAmount,
  actualAmount,
  taxRate,
  taxAmount,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex mb-4">
        <div className="mr-4">
          <label>予算科目</label>
          <input type="text" value={budgetItem} className="block w-full border" />
          <label>予算節</label>
          <input type="text" value={budgetSection} className="block w-full border" />
          <label>予算細節</label>
          <input type="text" value={budgetDetail} className="block w-full border" />
          <label>予算明細</label>
          <input type="text" value={budgetSubDetail} className="block w-full border" />
        </div>
        <div className="flex items-center">
          <button className="border px-2 py-1">予算科目検索</button>
          <button className="border px-2 py-1">仕訳科目検索</button>
        </div>
      </div>

      <div className="mb-4">
        <label>税区分</label>
        <select className="block w-full border">{/* Options go here */}</select>
        <label>収入区分</label>
        <select className="block w-full border">{/* Options go here */}</select>
      </div>

      <div className="mb-4">
        <label>振替額</label>
        <input type="number" value={transferAmount} className="block w-full border" />
        <label>本体金額</label>
        <input type="number" value={actualAmount} className="block w-full border" />
        <label>消費税率</label>
        <input type="number" value={taxRate} className="block w-full border" />
        <label>消費税額</label>
        <input type="number" value={taxAmount} className="block w-full border" />
      </div>

      <div className="mb-4">
        <label>摘要</label>
        <input type="text" className="block w-full border" />
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
