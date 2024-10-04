```tsx
import React from 'react';

// プロパティの型定義
interface FormProps {
  startDate: string;
  endDate: string;
  startCode: string;
  endCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DateRangeForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  startCode,
  endCode,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">所属別調定額集計表</h1>
      </div>
      <div className="border-b mb-4 pb-2">
        <h2 className="text-lg">範囲指定</h2>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">調定日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            className="border p-2 w-full"
            readOnly
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={endDate}
            className="border p-2 w-full"
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">所属コード</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startCode}
            className="border p-2 w-full"
            readOnly
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={endCode}
            className="border p-2 w-full"
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DateRangeForm;
```