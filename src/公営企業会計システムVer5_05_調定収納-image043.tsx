// Import necessary modules
import React from 'react';

// Define TypeScript props for the component
interface FormProps {
  startDate: string;
  endDate: string;
  startId: string;
  endId: string;
  onSubmit: () => void;
  onClear: () => void;
}

// Create a reusable Next.js + TypeScript component with Tailwind CSS
const PaymentProcessingForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  startId,
  endId,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">収納日締処理</h2>
      <div className="border p-4 rounded-md">
        <h3 className="text-lg font-medium text-gray-600 mb-4">範囲指定</h3>
        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 mr-2">収納日:</label>
          <div>
            <input
              type="text"
              value={startDate}
              className="border rounded p-1 mr-2"
              readOnly
            />
            ～
            <input
              type="text"
              value={endDate}
              className="border rounded p-1 ml-2"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="text-gray-700 mr-2">所属:</label>
          <div>
            <input
              type="text"
              value={startId}
              className="border rounded p-1 mr-2"
              readOnly
            />
            ～
            <input
              type="text"
              value={endId}
              className="border rounded p-1 ml-2"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-purple-300 border rounded hover:bg-purple-400"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PaymentProcessingForm;
