```tsx
import React from 'react';

type AlertProps = {
  title?: string; // タイトルテキストのプロパティ
  message: string; // メインメッセージ
  buttonLabel?: string; // ボタンラベルのプロパティ
  onButtonClick?: () => void; // ボタンがクリックされたときのイベントハンドラー
};

const Alert: React.FC<AlertProps> = ({
  title = '通知', // デフォルトのタイトル
  message,
  buttonLabel = 'OK', // デフォルトのボタンラベル
  onButtonClick,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
      <div className="bg-white border border-gray-400 rounded-md shadow-lg w-96 p-4">
        {title && (
          <div className="font-bold text-lg mb-2 text-gray-800">{title}</div>
        )}
        <div className="flex items-center mb-4">
          <div className="mr-2">
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l5.792 10.257c.73 1.294-.205 2.883-1.742 2.883H4.207c-1.537 0-2.471-1.59-1.742-2.883L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-.9.555l-.998 1.923a1 1 0 00.226 1.166l3 3a1 1 0 101.415-1.415l-2.528-2.529L10.9 7A1 1 0 0010 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-gray-700">{message}</div>
        </div>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Alert;
```