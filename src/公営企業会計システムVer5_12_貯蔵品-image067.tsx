// Import necessary modules and types
import React from 'react';

// Define the types for the component props
type FormProps = {
  title: string;
  startYearMonth: string;
  endYearMonth: string;
  locationCode: string;
  categoryCode: string;
  showZero: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

// Define the functional component using React and TypeScript
const PaymentForm: React.FC<FormProps> = ({
  title,
  startYearMonth,
  endYearMonth,
  locationCode,
  categoryCode,
  showZero,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md max-w-lg">
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      <div className="mb-4">
        <label className="inline-block w-24">入出庫年月:</label>
        <input 
          type="text" 
          value={startYearMonth} 
          className="border p-1 mr-2" 
          readOnly 
        />
        <span>~</span>
        <input 
          type="text" 
          value={endYearMonth} 
          className="border p-1 ml-2" 
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="inline-block w-24">保管場所:</label>
        <input 
          type="text" 
          value={locationCode} 
          className="border p-1" 
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="inline-block w-24">分類コード:</label>
        <input 
          type="text" 
          value={categoryCode} 
          className="border p-1" 
          readOnly 
        />
      </div>

      <div className="mb-4">
        <label className="inline-block w-24">数量0印字:</label>
        <span>{showZero ? 'あり' : 'なし'}</span>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 text-white p-2 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white p-2 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onFinish} 
          className="bg-red-500 text-white p-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;