```tsx
import React from 'react';

type PaymentFormProps = {
  decisionDate: string;
  paymentDate: string;
  summary: string;
  amount: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  decisionDate,
  paymentDate,
  summary,
  amount,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">支出決定入力</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Decision Date */}
        <div>
          <label className="block mb-2">決定処理日</label>
          <input
            type="text"
            value={decisionDate}
            readOnly
            className="p-2 border w-full"
          />
        </div>

        {/* Payment Date */}
        <div>
          <label className="block mb-2">支払日</label>
          <input
            type="text"
            value={paymentDate}
            readOnly
            className="p-2 border w-full"
          />
        </div>

        {/* Summary */}
        <div className="col-span-2">
          <label className="block mb-2">摘要</label>
          <input
            type="text"
            value={summary}
            readOnly
            className="p-2 border w-full"
          />
        </div>

        {/* Amount */}
        <div className="col-span-2">
          <label className="block mb-2">決定額</label>
          <input
            type="text"
            value={amount}
            readOnly
            className="p-2 border w-full text-right"
          />
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex justify-end space-x-2">
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            クリア
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
```