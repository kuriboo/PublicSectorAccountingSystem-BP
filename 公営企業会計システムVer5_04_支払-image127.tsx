// Import necessary modules
import React from 'react';

// Define props with TypeScript
interface DialogProps {
  message: string;
  onCancel: () => void;
}

// Define the Dialog component
const Dialog: React.FC<DialogProps> = ({ message, onCancel }) => {
  return (
    <div className="border-2 border-blue-600 bg-gray-100 rounded p-4 w-80 text-center shadow-lg">
      <div className="mb-4">{message}</div>
      <button
        onClick={onCancel}
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded shadow"
      >
        キャンセル
      </button>
    </div>
  );
};

export default Dialog;