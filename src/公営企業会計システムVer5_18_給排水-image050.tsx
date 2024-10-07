import React from 'react';

// TypeScript interface for component props
interface AlertProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 bg-white rounded shadow-lg p-4">
        <div className="border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
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