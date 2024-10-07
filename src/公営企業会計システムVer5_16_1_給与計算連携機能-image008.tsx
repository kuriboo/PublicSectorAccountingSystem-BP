import React from 'react';

type PaymentConfirmationProps = {
  startDate: string;
  endDate: string;
  onErrorCheck: () => void;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  startDate,
  endDate,
  onErrorCheck,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white w-full p-4 text-center">
        <h1 className="text-lg">給与支払確定</h1>
      </div>

      {/* Content Wrapper */}
      <div className="bg-white shadow-lg p-8 m-4 rounded-md w-2/3">
        <div className="border-2 border-gray-300 p-4">
          {/* Range Specification */}
          <h2 className="text-xl mb-4">範囲指定</h2>
          <div className="flex items-center justify-between">
            <span className="text-lg">支払確定日</span>
            <input
              type="text"
              value={startDate}
              readOnly
              className="border-2 border-blue-300 py-1 px-3 mx-2 rounded-md"
            />
            <span className="mx-2">～</span>
            <input
              type="text"
              value={endDate}
              readOnly
              className="border-2 border-blue-300 py-1 px-3 mx-2 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={onErrorCheck} 
          className="bg-gray-300 p-2 rounded-md shadow hover:bg-gray-400"
        >
          エラー確認
        </button>
        <button 
          onClick={onConfirm} 
          className="bg-green-500 text-white p-2 rounded-md shadow hover:bg-green-600"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-yellow-500 text-white p-2 rounded-md shadow hover:bg-yellow-600"
        >
          クリア
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 text-white p-2 rounded-md shadow hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
```