```tsx
// components/VoucherEntryForm.tsx

import React from 'react';

type VoucherEntryFormProps = {
  date: string;
  description: string;
  taxRate: number;
  taxAmount: number;
  onSave: () => void;
  onClear: () => void;
  onClose: () => void;
};

const VoucherEntryForm: React.FC<VoucherEntryFormProps> = ({
  date,
  description,
  taxRate,
  taxAmount,
  onSave,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* Date and Description Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">伝票日付</label>
        <input
          type="text"
          value={date}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">摘要</label>
        <input
          type="text"
          value={description}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      {/* Tax Details Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">消費税率</label>
          <input
            type="number"
            value={taxRate}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">税額</label>
          <input
            type="number"
            value={taxAmount}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={onSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default VoucherEntryForm;
```

Note: This component is designed to be reusable and customizable through its props.