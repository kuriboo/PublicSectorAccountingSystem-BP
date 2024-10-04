```tsx
import React from 'react';

// TypeScriptの型定義
interface AlertProps {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

// 再利用可能なAlertコンポーネント
const Alert: React.FC<AlertProps> = ({ title, message, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-xs mx-auto my-4 p-4 border border-gray-400 rounded bg-gray-100 shadow-lg">
      <div className="text-blue-800 font-bold mb-2">{title}</div>
      <div className="text-black mb-4">{message}</div>
      <button
        onClick={onButtonClick}
        className="px-4 py-2 bg-gray-300 border border-gray-500 rounded hover:bg-gray-400"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Alert;
```