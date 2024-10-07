import React from 'react';

// 型定義
type AlertProps = {
  message: string;
  title?: string;
  onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, title = 'Alert', onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ×
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.502-1.14.732-1.818L13.732 4.595c-.77-.679-1.951-.679-2.722 0L4.34 17.182c-.77.678-.322 1.818.732 1.818z"
              />
            </svg>
          </div>
          <p>{message}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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