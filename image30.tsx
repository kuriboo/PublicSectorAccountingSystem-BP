```tsx
import React from 'react';

// TypeScriptの型定義
interface AlertProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-4 max-w-sm w-full border border-gray-300">
        <div className="flex items-start justify-between">
          {/* タイトル */}
          <h3 className="text-lg font-semibold">{title}</h3>
          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="ml-4 text-white bg-gray-500 hover:bg-gray-700 font-bold py-1 px-3 rounded"
          >
            OK
          </button>
        </div>
        {/* メッセージ */}
        <div className="mt-2">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
```