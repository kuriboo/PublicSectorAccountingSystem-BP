```tsx
import React from 'react';

type PaymentDetailsProps = {
  paymentConfirmationDate: string;
  plannedPaymentDate: string;
  caseDate: string;
  onDisplayButtonClick: () => void;
  onOkButtonClick: () => void;
  onClearButtonClick: () => void;
  onEndButtonClick: () => void;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  paymentConfirmationDate,
  plannedPaymentDate,
  caseDate,
  onDisplayButtonClick,
  onOkButtonClick,
  onClearButtonClick,
  onEndButtonClick,
}) => {
  return (
    <div className="p-4 border rounded shadow-md w-full max-w-2xl mx-auto bg-white">
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold">給与支払確定日</h1>
        <span className="text-blue-500">{paymentConfirmationDate}</span>
      </div>

      <button
        onClick={onDisplayButtonClick}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        表示
      </button>

      <div className="mt-4 border p-2">
        <h2 className="text-md font-semibold mb-2">預り金支払</h2>
        <div className="flex justify-between">
          <div>
            <span>支払予定日</span>
            <span className="text-green-500 ml-2">{plannedPaymentDate}</span>
          </div>
          <div>
            <span>起案日</span>
            <span className="text-green-500 ml-2">{caseDate}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-2 border-t pt-4">
        <h3 className="text-md font-semibold mb-1">処理概要</h3>
        <p className="text-sm text-gray-700">
          預り金支払のも...（略）
        </p>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onOkButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClearButtonClick}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          クリア
        </button>
        <button
          onClick={onEndButtonClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
```