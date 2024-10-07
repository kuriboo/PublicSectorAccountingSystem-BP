import React from 'react';

// Type definitions for props
interface Props {
  formTitle: string;
  creationDate: string;
  accountingCodeOptions: Array<{ code: string; name: string }>;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const AccountingForm: React.FC<Props> = ({
  formTitle,
  creationDate,
  accountingCodeOptions,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      {/* Form Title */}
      <h1 className="text-xl font-bold mb-4">{formTitle}</h1>

      {/* Creation Date */}
      <div className="mb-4">
        <label className="block font-medium">作成年月日:</label>
        <span className="text-gray-700">{creationDate}</span>
      </div>

      {/* Accounting Code Selection */}
      <div className="mb-4">
        <label className="block font-medium mb-2">会計区分コード:</label>
        <select className="border rounded w-full p-2">
          {accountingCodeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Form Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-200 text-gray-700 rounded p-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-red-500 text-white rounded p-2"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```