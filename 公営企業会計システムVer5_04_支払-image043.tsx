```tsx
import React from 'react';

// Type definitions for props
interface FormProps {
  decisionDate?: string;
  paymentDate?: string;
  contractNumber?: string;
  contractName?: string;
  summary?: string;
  paymentAmount?: number;
  onRegister?: () => void;
  onClear?: () => void;
  onClose?: () => void;
}

const PaymentForm: React.FC<FormProps> = ({
  decisionDate = '',
  paymentDate = '',
  contractNumber = '',
  contractName = '',
  summary = '',
  paymentAmount = 0,
  onRegister,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      {/* Decision Date Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">決定処理日</label>
        <input
          type="text"
          value={decisionDate}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Payment Date Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">支払日</label>
        <input
          type="text"
          value={paymentDate}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Contract Number Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">契約番号</label>
        <input
          type="text"
          value={contractNumber}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Contract Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">契約名称</label>
        <input
          type="text"
          value={contractName}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Summary Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">摘要</label>
        <textarea
          value={summary}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Payment Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-bold">決定額</label>
        <input
          type="number"
          value={paymentAmount}
          className="w-full mt-1 p-2 border rounded-md"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onRegister}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
```