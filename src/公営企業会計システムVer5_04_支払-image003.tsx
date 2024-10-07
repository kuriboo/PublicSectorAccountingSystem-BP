import React from 'react';

// プロパティの型定義
type AlertProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="max-w-sm mx-auto my-8 border border-gray-400 rounded-md shadow-lg">
      <div className="bg-blue-600 text-white p-2 flex items-center justify-between">
        <span className="font-bold">警告</span>
        {/* ダミーのアイコン */}
        <span>⚠️</span>
      </div>
      <div className="p-4">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          {/* はいボタン */}
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={onConfirm}
          >
            はい (Y)
          </button>
          {/* いいえボタン */}
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            いいえ (N)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
```