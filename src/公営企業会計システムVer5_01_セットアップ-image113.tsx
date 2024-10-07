import React from 'react';

// TypeScriptの型定義
type CopyFormProps = {
  fiscalYear: string;
  originOptions: Array<{ value: string; label: string }>;
  destinationOptions: Array<{ value: string; label: string }>;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const CopyForm: React.FC<CopyFormProps> = ({
  fiscalYear,
  originOptions,
  destinationOptions,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-gray-50">
      <h2 className="text-lg font-bold mb-4">作表制御表マスタコピー</h2>
      
      <div className="mb-4">
        <label className="block font-medium">会計年度</label>
        <span>{fiscalYear}</span>
      </div>
      
      <div className="mb-4">
        <label className="block font-medium">作表制御区分(コピー元)</label>
        <select className="mt-1 p-2 border rounded-md w-full">
          {originOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block font-medium">作表制御区分(コピー先)</label>
        <select className="mt-1 p-2 border rounded-md w-full">
          {destinationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="p-4 bg-white border rounded-md mb-4">
        <p className="text-sm text-blue-800">
          画面指定された「作表制御表区分(コピー元)」から、「作表制御表区分(コピー先)」のデータを作成します。...
        </p>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CopyForm;
```