import React from 'react';

interface TransferFormProps {
  requestedDate: string;
  transferDate: string;
  groupOptions: { id: string; name: string }[];
  selectedGroup: string;
  onGroupChange: (id: string) => void;
  onCheckboxChange: (checked: boolean) => void;
  checkboxChecked: boolean;
  onConfirm: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const TransferForm: React.FC<TransferFormProps> = ({
  requestedDate,
  transferDate,
  groupOptions,
  selectedGroup,
  onGroupChange,
  onCheckboxChange,
  checkboxChecked,
  onConfirm,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-lg font-bold mb-4">口座振込依頼書</h1>
      <div className="border p-4 mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="mb-2">
          <label className="block mb-1">振込依頼日</label>
          <span>{requestedDate}</span>
        </div>
        <div className="mb-2">
          <label className="block mb-1">振込日</label>
          <span>{transferDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={(e) => onCheckboxChange(e.target.checked)}
            className="mr-2"
          />
          FD作成済データを印字しない
        </label>
      </div>
      <div className="mb-4">
        <select
          value={selectedGroup}
          onChange={(e) => onGroupChange(e.target.value)}
          className="w-full p-2 border"
        >
          {groupOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default TransferForm;
```