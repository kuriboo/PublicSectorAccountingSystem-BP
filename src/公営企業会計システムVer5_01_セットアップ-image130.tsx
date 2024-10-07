import React from 'react';

// TypeScript interface to define prop types
interface PaymentFormProps {
  divisionPartner: string;
  onDivisionPartnerChange: (value: string) => void;
  detailsNumber: number;
  onDetailsNumberChange: (value: number) => void;
  partner: string;
  onPartnerChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

// Reusable PaymentForm component
const PaymentForm: React.FC<PaymentFormProps> = ({
  divisionPartner,
  onDivisionPartnerChange,
  detailsNumber,
  onDetailsNumberChange,
  partner,
  onPartnerChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-bold text-blue-700 mb-4">支払分割指示マスタ</h2>
      <div className="mb-4">
        <label className="block font-medium">分割相手先</label>
        <input
          type="text"
          value={divisionPartner}
          onChange={(e) => onDivisionPartnerChange(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <div className="mb-4 p-4 border rounded">
        <h3 className="font-medium">相手先設定</h3>
        <div className="mb-2">
          <label className="block font-medium">明細番号</label>
          <input
            type="number"
            value={detailsNumber}
            onChange={(e) => onDetailsNumberChange(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium">相手先</label>
          <input
            type="text"
            value={partner}
            onChange={(e) => onPartnerChange(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="flex space-x-2 justify-end">
          <button 
            onClick={onConfirm} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            確定
          </button>
          <button 
            onClick={onCancel} 
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
