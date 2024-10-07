import React from 'react';

// TypeScript interface for component props
interface PaymentFormProps {
  decisionDate?: string;
  paymentDate?: string;
  invoiceDate?: string;
  summary?: string;
  payee?: string;
  paymentAmount?: number;
  onSubmit?: () => void;
  onClear?: () => void;
  onClose?: () => void;
}

// Functional component using Tailwind CSS
const PaymentForm: React.FC<PaymentFormProps> = ({
  decisionDate,
  paymentDate,
  invoiceDate,
  summary,
  payee,
  paymentAmount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">支出決定入力</h2>
      
      {/* Form fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">決定処理日</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" defaultValue={decisionDate} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">支払日</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" defaultValue={paymentDate} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">請求書日</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" defaultValue={invoiceDate} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">摘要</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" defaultValue={summary} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">支払先</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="text" defaultValue={payee} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">決定額</label>
          <input className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" type="number" defaultValue={paymentAmount} />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>

        <button 
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>

        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
