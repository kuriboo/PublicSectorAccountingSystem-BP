```tsx
import React from 'react';

// TypeScript interface for component props
interface ErrorDialogProps {
  title?: string;
  date?: string;
  time?: string;
  errorCode?: number;
  errorMessage?: string;
  errorLocation?: string;
  errorFunction?: string;
  onOkClick?: () => void;
  onDetailsClick?: () => void;
  onLogClick?: () => void;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({
  title = 'システム エラー',
  date = '2017/08/29',
  time = '16:08:25',
  errorCode = 6,
  errorMessage = 'サーバーに接続できませんでした。',
  errorLocation = 'http://192.168.3.115/crs/crscom/comSQL.crs',
  errorFunction = 'HTTP',
  onOkClick,
  onDetailsClick,
  onLogClick,
}) => {
  return (
    <div className="border p-4 max-w-md mx-auto bg-gray-100 shadow-md rounded">
      <div className="flex justify-between items-center bg-pink-200 p-2 rounded-t">
        <span>{title}</span>
        <span>{`${date} ${time}`}</span>
      </div>
      <div className="mt-2">
        <p>システムエラーが発生しました</p>
        <p>例外番号: {errorCode}</p>
        <p>{errorMessage}</p>
        <p>発生箇所: {errorLocation}</p>
        <p>機能: {errorFunction}</p>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onOkClick} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          OK
        </button>
        <button onClick={onDetailsClick} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          簡易へ
        </button>
        <button onClick={onLogClick} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
          ログ参照
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;
```