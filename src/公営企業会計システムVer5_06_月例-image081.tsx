// Import necessary modules
import React from 'react';

// Define the types for the props
type InvoiceFormProps = {
  year: string;
  voucherNumber: number;
  transactionDate: string;
  summary: string;
  totalAmount: number;
  taxExcludedAmount: number;
  taxAmount: number;
  onVoucherNumberChange: (value: number) => void;
  onIncludeTaxChange: (checked: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Define the InvoiceForm component
const InvoiceForm: React.FC<InvoiceFormProps> = ({
  year,
  voucherNumber,
  transactionDate,
  summary,
  totalAmount,
  taxExcludedAmount,
  taxAmount,
  onVoucherNumberChange,
  onIncludeTaxChange,
  onSubmit,
  onClear,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-2">消費税仕訳伝票選択</h2>
      <div className="mb-4">
        <label className="block font-bold mb-1">年度</label>
        <div>{year}</div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">振替番号</label>
        <input 
          type="number"
          value={voucherNumber}
          onChange={(e) => onVoucherNumberChange(Number(e.target.value))}
          className="border rounded p-1"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">伝票日付</label>
        <div>{transactionDate}</div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">摘要</label>
        <div>{summary}</div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <label className="block font-bold mb-1">税込金額</label>
            <div>{totalAmount.toLocaleString()}</div>
          </div>
          <div>
            <label className="block font-bold mb-1">税抜金額</label>
            <div>{taxExcludedAmount.toLocaleString()}</div>
          </div>
          <div>
            <label className="block font-bold mb-1">消費税額</label>
            <div>{taxAmount.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">貸借区分</label>
        <div>
          <label>
            <input type="radio" name="debitCredit" value="debit" /> 借方
          </label>
          <label className="ml-4">
            <input type="radio" name="debitCredit" value="credit" /> 貸方
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label>
          <input 
            type="checkbox"
            onChange={(e) => onIncludeTaxChange(e.target.checked)}
          /> 特定課税仕入の還元伝票
        </label>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={onSubmit}
          className="bg-blue-500 text-white py-1 px-3 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear}
          className="bg-gray-500 text-white py-1 px-3 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onCancel}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
```