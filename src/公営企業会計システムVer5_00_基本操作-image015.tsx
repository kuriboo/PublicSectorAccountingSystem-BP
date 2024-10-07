import React from 'react';

interface AlertProps {
  message: string;
  onConfirm: () => void;
  title?: string;
}

const Alert: React.FC<AlertProps> = ({ message, onConfirm, title = 'Alert' }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-20 p-4 bg-white rounded shadow-lg">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center justify-start mb-4">
        <span className="text-yellow-500 mr-2">⚠️</span>
        <span>{message}</span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
