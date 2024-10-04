```tsx
import React from 'react';

// 型定義
type AdjustmentFormProps = {
  amount: number;
  onAmountChange: (amount: number) => void;
  onConfirm: () => void;
  onClose: () => void;
};

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  amount,
  onAmountChange,
  onConfirm,
  onClose,
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
        調整金額自動仕訳作成
      </h2>
      <div className="mb-4 flex items-center">
        <label htmlFor="amount" className="mr-2">
          調整金額
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="border border-gray-400 px-2 py-1 mr-2 w-24"
        />
        <span>円</span>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
        >
          終了
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AdjustmentForm;
```