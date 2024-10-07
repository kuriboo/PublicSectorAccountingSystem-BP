import React from 'react';

// TypeScriptの型定義
interface ConnectionFormProps {
  year: string;
  userName: string;
  connectionOptions: string[];
  roleOptions: string[];
  onLogin: () => void;
  onCancel: () => void;
}

const ConnectionForm: React.FC<ConnectionFormProps> = ({
  year,
  userName,
  connectionOptions,
  roleOptions,
  onLogin,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md w-80">
      <h2 className="text-lg font-bold mb-2">接続先変更画面</h2>
      <div className="text-sm mb-4">
        <p>{year}年度</p>
        <p>{userName}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">接続先</label>
        <select className="w-full p-2 border rounded">
          {connectionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">所属担当</label>
        <select className="w-full p-2 border rounded">
          {roleOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
          onClick={onLogin}
        >
          ログイン
        </button>
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ConnectionForm;
