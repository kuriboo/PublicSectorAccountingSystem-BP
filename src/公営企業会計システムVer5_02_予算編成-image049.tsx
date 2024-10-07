import React from 'react';

// Define types for props
type AdjustmentFormProps = {
  fiscalYear: string;
  department: string;
  accountNumber: string;
  adjustmentNumber: string;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
};

// Reusable component for adjustment form
const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  fiscalYear,
  department,
  accountNumber,
  adjustmentNumber,
  onChange,
  onSubmit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">補正科目別査定登録</h1>
      <form>
        {/* Fiscal Year Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">年度</label>
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onChange('fiscalYear', e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </div>
        
        {/* Department Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">課</label>
          <input
            type="text"
            value={department}
            onChange={(e) => onChange('department', e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </div>

        {/* Account Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">補正番号</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => onChange('accountNumber', e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </div>

        {/* Adjustment Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium">査定番号</label>
          <input
            type="text"
            value={adjustmentNumber}
            onChange={(e) => onChange('adjustmentNumber', e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            登録
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-yellow-500 text-white rounded"
          >
            訂正
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            行削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdjustmentForm;
```