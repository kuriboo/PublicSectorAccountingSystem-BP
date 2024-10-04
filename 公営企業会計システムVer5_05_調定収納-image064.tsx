```tsx
import React from 'react';

// 型定義
type AlertProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

// コンポーネント定義
const Alert: React.FC<AlertProps> = ({ title, message, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg p-4 w-80">
        {/* タイトル */}
        <div className="text-xl font-bold">{title}</div>
        
        {/* メッセージ */}
        <div className="flex items-center mt-4">
          <div className="mr-2 text-yellow-500">
            {/* 警告アイコン */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" /></svg>
          </div>
          <div>{message}</div>
        </div>
        
        {/* ボタン */}
        <div className="flex justify-end mt-6">
          <button 
            onClick={onConfirm} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
```