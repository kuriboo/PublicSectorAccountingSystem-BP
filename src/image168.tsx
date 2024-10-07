import React from 'react';

type DialogBoxProps = {
  title: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
};

const DialogBox: React.FC<DialogBoxProps> = ({ title, message, onOk, onCancel }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Title Section */}
      <div className="w-full max-w-md bg-blue-100 p-4 rounded-t-lg shadow">
        <h1 className="text-lg font-semibold text-blue-900">{title}</h1>
      </div>
      
      {/* Message Section */}
      <div className="w-full max-w-md bg-white p-6 border-t border-b shadow">
        <p className="text-center text-blue-900">{message}</p>
      </div>

      {/* Buttons Section */}
      <div className="w-full max-w-md flex justify-end bg-gray-200 p-4 rounded-b-lg shadow">
        <button
          onClick={onOk}
          className="bg-white text-gray-700 px-4 py-2 m-1 rounded-lg shadow-md hover:bg-gray-100"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-white text-gray-700 px-4 py-2 m-1 rounded-lg shadow-md hover:bg-gray-100"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
```