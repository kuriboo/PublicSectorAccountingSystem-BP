import React from 'react';

// Types for component props
type ConversionFormProps = {
  assetStart?: string;
  assetEnd?: string;
  numberStart?: number;
  numberEnd?: number;
  department?: string;
  accountingCodeStart?: string;
  accountingCodeEnd?: string;
  onSubmit: () => void;
  onClear: () => void;
};

const ConversionForm: React.FC<ConversionFormProps> = ({
  assetStart = '',
  assetEnd = '',
  numberStart = 0,
  numberEnd = 0,
  department = '',
  accountingCodeStart = '',
  accountingCodeEnd = '',
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md max-w-xl mx-auto">
      <h2 className="text-lg font-semibold text-purple-700 mb-4">会計区分一括変換</h2>

      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-800 mb-2">範囲指定</h3>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="flex items-center mb-2">
            <span className="w-32 text-sm">固定資産科目</span>
            <input
              type="text"
              value={assetStart}
              className="border p-1 flex-grow"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={assetEnd}
              className="border p-1 flex-grow"
            />
          </div>

          <div className="flex items-center mb-2">
            <span className="w-32 text-sm">資産番号</span>
            <input
              type="number"
              value={numberStart}
              className="border p-1 flex-grow"
            />
            <span className="mx-2">~</span>
            <input
              type="number"
              value={numberEnd}
              className="border p-1 flex-grow"
            />
          </div>

          <div className="flex items-center">
            <span className="w-32 text-sm">部門</span>
            <input
              type="text"
              value={department}
              className="border p-1 flex-grow"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center">
          <span className="w-32 text-sm">会計区分</span>
          <input
            type="text"
            value={accountingCodeStart}
            className="border p-1 flex-grow"
          />
          <span className="mx-2">→</span>
          <input
            type="text"
            value={accountingCodeEnd}
            className="border p-1 flex-grow"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ConversionForm;
```