// components/ExpenseForm.tsx
import React from 'react';

type ExpenseFormProps = {
  section?: string;
  subSection?: string;
  details?: string;
  taxRate?: number;
  determinedAmount?: number;
  transferAmount?: number;
  taxIncludedAmount?: number;
  onSectionSearch?: () => void;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  section = '00201 0812',
  subSection = '0001',
  details = '1001',
  taxRate = 10,
  determinedAmount = 5000,
  transferAmount = 5000,
  taxIncludedAmount = 456,
  onSectionSearch,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-96">
      {/* Section Display */}
      <div className="mb-4">
        <div className="text-sm text-blue-900 font-bold">節</div>
        <div className="text-sm">{section} 総・備・消品費</div>
      </div>
      
      {/* Sub-section and Details */}
      <div className="mb-4">
        <div className="text-sm text-blue-900 font-bold">細節</div>
        <div className="text-sm">{subSection} 消耗品費</div>
        <div className="text-sm text-blue-900 font-bold mt-2">明細</div>
        <div className="text-sm">{details} 消耗品費／課</div>
      </div>

      {/* Amounts and Taxes */}
      <div className="mb-4">
        <div className="flex items-center text-sm mb-1">
          <span className="font-bold text-blue-900 mr-2">消費税率</span>
          <span>C6</span>
          <input type="text" value={taxRate} readOnly className="w-12 text-center border mx-2" />
          <span>%</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>決定金額</span>
          <span>{determinedAmount.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>戻入金額</span>
          <span>{transferAmount.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>内消費税額</span>
          <span>{taxIncludedAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Section Search Button */}
      <div className="flex justify-between mb-4">
        <button
          onClick={onSectionSearch}
          className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
        >
          科目検索
        </button>
      </div>

      {/* Actions */}
      <div className="flex justify-around">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;