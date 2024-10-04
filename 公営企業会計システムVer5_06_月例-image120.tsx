```tsx
import React from 'react';

// 型定義
type Props = {
  title: string;
  date: string;
  userName: string;
  userRole: string;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingSystemHeader: React.FC<Props> = ({
  title,
  date,
  userName,
  userRole,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center bg-indigo-200 rounded-lg p-2 mb-4">
        <h1 className="text-lg font-bold text-indigo-700">{title}</h1>
        <div className="text-right">
          <div>{userRole}</div>
          <div>{userName}</div>
          <div>{date}</div>
        </div>
      </div>

      <div className="text-center mb-4">
        <span className="font-bold text-indigo-900">作表日付</span>
        <span className="ml-2 border p-1">{date}</span>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onCsvExport}
          className="bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-500"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingSystemHeader;
```