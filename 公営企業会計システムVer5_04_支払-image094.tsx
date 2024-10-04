```tsx
import React from 'react';

// TypeScript 型定義
type Props = {
  decisionDate?: string;
  paymentReason?: string;
  approvalDiv?: string;
  paymentDate?: string;
  invoiceDate?: string;
  description?: string;
  payee?: string;
  paymentMethod?: string;
  decisionAmount?: number;
  handleSubmit: () => void;
  handleClear: () => void;
  handleClose: () => void;
};

const PaymentDecisionInput: React.FC<Props> = ({
  decisionDate = '',
  paymentReason = '',
  approvalDiv = '',
  paymentDate = '',
  invoiceDate = '',
  description = '',
  payee = '',
  paymentMethod = '',
  decisionAmount = 0,
  handleSubmit,
  handleClear,
  handleClose,
}) => {
  return (
    <div className="bg-blue-50 p-4 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">決定処理日</label>
        <input type="text" value={decisionDate} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">決裁区分</label>
        <input type="text" value={paymentReason} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">合裁区分</label>
        <input type="text" value={approvalDiv} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">支払日</label>
        <input type="text" value={paymentDate} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">請求書日</label>
        <input type="text" value={invoiceDate} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">摘要</label>
        <input type="text" value={description} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">支払先</label>
        <input type="text" value={payee} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">支払方法</label>
        <input type="text" value={paymentMethod} className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">決定額</label>
        <input type="number" value={decisionAmount} className="w-full border p-2" />
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={handleClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={handleClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentDecisionInput;
```