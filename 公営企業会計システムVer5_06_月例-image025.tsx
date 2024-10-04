```tsx
// Import necessary modules
import React from 'react';

// Define the types for the component props
type BankFormProps = {
  date: string;
  period: '日次' | '月次';
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Create the BankForm component
const BankForm: React.FC<BankFormProps> = ({ date, period, onOk, onClear, onClose }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <h1 className="text-xl font-bold">銀行預金別資金残高表作成</h1>
      </div>
      <div className="p-4 bg-white border rounded-lg">
        <h2 className="text-blue-800 mb-2">範囲指定</h2>
        <div className="mb-4">
          <label className="block text-blue-800 mb-1">作表日</label>
          <input
            type="text"
            value={date}
            readOnly
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block text-blue-800 mb-1">作表区分</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="daily"
              name="period"
              checked={period === '日次'}
              readOnly
              className="mr-2"
            />
            <label htmlFor="daily" className="mr-4">日次</label>
            <input
              type="radio"
              id="monthly"
              name="period"
              checked={period === '月次'}
              readOnly
              className="mr-2"
            />
            <label htmlFor="monthly">月次</label>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BankForm;
```