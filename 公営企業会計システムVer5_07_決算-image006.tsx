```tsx
import React from 'react';

// 型定義
interface MasterListFormProps {
  initialYear?: number;
  initialAccountStart?: string;
  initialAccountEnd?: string;
  initialRemarkStart?: number;
  initialRemarkEnd?: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const MasterListForm: React.FC<MasterListFormProps> = ({
  initialYear = new Date().getFullYear(),
  initialAccountStart = '',
  initialAccountEnd = '',
  initialRemarkStart = 0,
  initialRemarkEnd = 99,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="number"
          defaultValue={initialYear}
          className="mt-1 border rounded py-1 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">範囲指定</label>
        <div className="flex items-center mb-2">
          <span>仕訳科目</span>
          <input
            type="text"
            defaultValue={initialAccountStart}
            className="ml-2 border rounded py-1 px-3"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            defaultValue={initialAccountEnd}
            className="border rounded py-1 px-3"
          />
        </div>

        <div className="flex items-center">
          <span>備考明細番号</span>
          <input
            type="number"
            defaultValue={initialRemarkStart}
            className="ml-2 border rounded py-1 px-3"
          />
          <span className="mx-2">~</span>
          <input
            type="number"
            defaultValue={initialRemarkEnd}
            className="border rounded py-1 px-3"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white border rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white border rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterListForm;
```