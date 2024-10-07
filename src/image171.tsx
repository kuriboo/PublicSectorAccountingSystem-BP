import React from 'react';

// TypeScript types for the props
type AppGroupProps = {
  groupCode: string;
  canSetIndividually: boolean;
  groupName: string;
  onSave: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// AppGroupForm component
const AppGroupForm: React.FC<AppGroupProps> = ({
  groupCode,
  canSetIndividually,
  groupName,
  onSave,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">アプリケーショングループマスタ</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">APグループコード</label>
          <input
            type="text"
            value={groupCode}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={canSetIndividually}
            readOnly
            className="mr-2"
          />
          <span className="text-gray-700">個別設定可能フラグ</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">グループ名称</label>
          <input
            type="text"
            value={groupName}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onEdit}
            className="flex-1 bg-blue-500 text-white p-2 rounded"
          >
            編集
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="flex-1 bg-red-500 text-white p-2 rounded"
          >
            行削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppGroupForm;
```