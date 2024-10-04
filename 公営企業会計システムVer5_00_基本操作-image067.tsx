import React from 'react';

type ErrorDialogProps = {
  title?: string;
  errorMessage?: string;
  dateTime?: string;
  onOkClick?: () => void;
  onDetailsClick?: () => void;
  onViewLogClick?: () => void;
};

const ErrorDialog: React.FC<ErrorDialogProps> = ({
  title = "エラー発生",
  errorMessage = "システムエラーが発生しました。管理者に連絡してください。",
  dateTime,
  onOkClick,
  onDetailsClick,
  onViewLogClick,
}) => {
  return (
    <div className="w-96 border border-gray-500 rounded-md shadow-lg">
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <span className="text-gray-700">{title}</span>
        <span className="text-xs text-gray-600">{dateTime}</span>
      </div>
      <div className="bg-purple-100 p-2 text-sm">
        <p>{errorMessage}</p>
      </div>
      <div className="flex justify-end p-2 border-t border-gray-300 space-x-2">
        <button
          className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="px-4 py-1 text-gray-700 border rounded hover:bg-gray-100 focus:outline-none"
          onClick={onDetailsClick}
        >
          詳細へ
        </button>
        <button
          className="px-4 py-1 text-gray-700 border rounded hover:bg-gray-100 focus:outline-none"
          onClick={onViewLogClick}
        >
          ログ参照
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;