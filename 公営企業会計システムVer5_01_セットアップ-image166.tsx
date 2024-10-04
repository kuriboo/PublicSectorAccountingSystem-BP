```tsx
import React from 'react';

// TypeScriptの型定義
type MessageBoxProps = {
  title: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
};

// MessageBoxコンポーネント
const MessageBox: React.FC<MessageBoxProps> = ({ title, message, onOk, onCancel }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      {/* タイトル */}
      <div className="bg-blue-200 w-full py-2 px-4 rounded-t-md">
        <h1 className="text-lg font-bold text-blue-800">{title}</h1>
      </div>
      {/* メッセージボックス */}
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md py-8 px-12 mt-4">
        <p className="text-blue-800 text-center">{message}</p>
      </div>
      {/* ボタン */}
      <div className="flex space-x-4 mt-8">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
```