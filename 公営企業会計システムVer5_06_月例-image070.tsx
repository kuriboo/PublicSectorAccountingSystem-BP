```tsx
// components/ExecutionDetailsForm.tsx
import React from 'react';

type ExecutionDetailsFormProps = {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ExecutionDetailsForm: React.FC<ExecutionDetailsFormProps> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="border p-8 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">作表年月</label>
        <div className="flex items-center">
          <input
            type="text"
            className="border rounded p-2 mr-4 w-full"
            value={startDate}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border rounded p-2 ml-4 w-full"
            value={endDate}
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">事業科目</label>
        <div className="flex items-center">
          <input
            type="text"
            className="border rounded p-2 mr-4 w-full"
            value={startCode}
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            className="border rounded p-2 ml-4 w-full"
            value={endCode}
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-yellow-500 text-white rounded px-4 py-2"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ExecutionDetailsForm;
```