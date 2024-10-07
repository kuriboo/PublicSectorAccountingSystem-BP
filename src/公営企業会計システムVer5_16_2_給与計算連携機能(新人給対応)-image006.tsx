import React from 'react';

// Props type definition
type PaymentConfirmationProps = {
  startDate: string;
  endDate: string;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  startDate,
  endDate,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
      {/* Header */}
      <div className="bg-blue-200 text-center text-lg font-bold py-2">給与支払確定</div>

      {/* Date Range Selection */}
      <div className="mt-4 p-4 border rounded-lg">
        <div className="flex items-center">
          <span className="text-lg font-semibold text-blue-900">範囲指定</span>
        </div>
        <div className="flex justify-between mt-2">
          <label className="text-blue-900 font-medium">支払確定日</label>
          <div className="flex items-center">
            <input 
              type="text" 
              value={startDate} 
              readOnly 
              className="border-b focus:outline-none focus:border-blue-500"
            />
            <span className="mx-2">~</span>
            <input 
              type="text" 
              value={endDate} 
              readOnly 
              className="border-b focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-3">
        <button 
          onClick={onClear} 
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          クリア
        </button>
        <button 
          onClick={onConfirm} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          OK
        </button>
        <button 
          onClick={onClose} 
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
```