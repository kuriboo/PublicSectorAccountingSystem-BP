```tsx
// pages/JournalEntry.tsx

import React from 'react';

interface JournalEntryProps {
  date: string;
  voucherCode: string;
  summary: string;
  budgetAccount: string;
  mainTranslation: string;
  consumptionTaxTranslation: string;
  taxRate: number;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const JournalEntry: React.FC<JournalEntryProps> = ({
  date,
  voucherCode,
  summary,
  budgetAccount,
  mainTranslation,
  consumptionTaxTranslation,
  taxRate,
  taxIncludedAmount,
  taxExcludedAmount,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <div className="flex flex-col space-y-4">
        {/* Date and Voucher Code */}
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">伝票日付</label>
            <input type="text" value={date} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">仕訳コード</label>
            <input type="text" value={voucherCode} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700">摘要</label>
          <input type="text" value={summary} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
        </div>

        {/* Budget and Details */}
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">予算</label>
            <input type="text" value={budgetAccount} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">本体仕訳</label>
            <input type="text" value={mainTranslation} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* Tax Rate and Amounts */}
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">消費税率</label>
            <input type="number" value={taxRate} readOnly className="mt-1 block w-16 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">税込金額</label>
            <input type="number" value={taxIncludedAmount} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">税抜金額</label>
            <input type="number" value={taxExcludedAmount} readOnly className="mt-1 block w-full border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button type="button" onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            クリア
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
```