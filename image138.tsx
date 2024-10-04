```tsx
import React from 'react';

// Prop types for the component
interface FormProps {
  fiscalYear: string;
  issueDate: string;
  assetJoiningDate: string;
  assetIncreaseAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable component
const ManagementForm: React.FC<FormProps> = ({
  fiscalYear,
  issueDate,
  assetJoiningDate,
  assetIncreaseAmount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-4">債却／予測管理マスタ</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">当期会計年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">前回出処理年月</label>
          <input
            type="text"
            value={issueDate}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">資産転有加入年月</label>
          <input
            type="text"
            value={assetJoiningDate}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">資産増加額</label>
          <input
            type="number"
            value={assetIncreaseAmount}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ManagementForm;
```