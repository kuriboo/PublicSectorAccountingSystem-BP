```tsx
import React from 'react';

// 型定義
interface ConnectionFormProps {
  fiscalYear: string;
  userName: string;
  connections: string[];
  roles: string[];
  onConnect: () => void;
  onCancel: () => void;
}

const ConnectionForm: React.FC<ConnectionFormProps> = ({
  fiscalYear,
  userName,
  connections,
  roles,
  onConnect,
  onCancel
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md w-80">
      {/* タイトル */}
      <h1 className="text-gray-700 mb-4">接続先変更画面</h1>
      
      {/* ユーザー情報 */}
      <div className="text-sm text-gray-600 mb-4">
        <span>{fiscalYear} 年度</span>
        <span className="ml-4">{userName}</span>
      </div>
      
      {/* 接続先セレクトボックス */}
      <div className="mb-4">
        <label className="block text-gray-700">接続先</label>
        <select className="mt-1 block w-full p-2 border rounded">
          {connections.map((connection, index) => (
            <option key={index} value={connection}>
              {connection}
            </option>
          ))}
        </select>
      </div>
      
      {/* 所属担当セレクトボックス */}
      <div className="mb-4">
        <label className="block text-gray-700">所属担当</label>
        <select className="mt-1 block w-full p-2 border rounded">
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onConnect}
        >
          ログイン
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ConnectionForm;
```