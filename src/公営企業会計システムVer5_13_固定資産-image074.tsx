import React from 'react';

// TypeScript props definition
type FormProps = {
  date: string;
  assetCategory: string;
  assetNumber: string;
  managementName: string;
  managementCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// Reusable Form Component
const CustomForm: React.FC<FormProps> = ({
  date,
  assetCategory,
  assetNumber,
  managementName,
  managementCode,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">名称規格一覧表作成</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">作表年月日</label>
        <input
          type="text"
          value={date}
          readOnly
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">固定資産科目</label>
          <input
            type="text"
            defaultValue={assetCategory}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">～ 固定資産科目</label>
          <input
            type="text"
            defaultValue={assetNumber}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">資産番号</label>
          <input
            type="text"
            defaultValue={assetNumber}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">管理名称</label>
          <input
            type="text"
            defaultValue={managementName}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">管理規格</label>
          <input
            type="text"
            defaultValue={managementCode}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-gray-700 rounded px-4 py-2"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 rounded px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```