// Import necessary modules and components
import React from 'react';

type AdjustmentInputProps = {
  accountNumber: string;
  accountName: string;
  debitAmount: number;
  creditAmount: number;
  onAccountSearch: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const AdjustmentInput: React.FC<AdjustmentInputProps> = ({
  accountNumber,
  accountName,
  debitAmount,
  creditAmount,
  onAccountSearch,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 border rounded">
      {/* Detail Information Section */}
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-bold">明細情報</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <label className="mr-2">仕訳家</label>
            <input
              type="text"
              value={accountNumber}
              readOnly
              className="flex-1 p-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2">仕訳項</label>
            <input
              type="text"
              value={accountName}
              readOnly
              className="flex-1 p-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2">変更借方仕訳金額</label>
            <input
              type="text"
              value={debitAmount.toLocaleString()}
              readOnly
              className="flex-1 p-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2">変更貸方仕訳金額</label>
            <input
              type="text"
              value={creditAmount.toLocaleString()}
              readOnly
              className="flex-1 p-2 border rounded"
            />
          </div>
        </div>
        <button
          onClick={onAccountSearch}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          科目検索
        </button>
      </div>
      {/* Action Buttons Section */}
      <div className="flex justify-end">
        <button
          onClick={onConfirm}
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          確定
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AdjustmentInput;
```