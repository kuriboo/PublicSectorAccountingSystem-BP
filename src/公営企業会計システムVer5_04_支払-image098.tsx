import React from 'react';

interface TaxFormProps {
  section: string;
  subsection: string;
  detail: string;
  taxType: string;
  taxRate: number;
  receiptAmount: number;
  taxAmount: number;
  refundAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const TaxForm: React.FC<TaxFormProps> = ({
  section,
  subsection,
  detail,
  taxType,
  taxRate,
  receiptAmount,
  taxAmount,
  refundAmount,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
      {/* Section and Detail Information */}
      <div className="mb-4">
        <div className="text-sm">
          <span>節: </span>{section}
        </div>
        <div className="text-sm">
          <span>細節: </span>{subsection}
        </div>
        <div className="text-sm">
          <span>明細: </span>{detail}
        </div>
      </div>

      {/* Tax Information */}
      <div className="mb-4">
        <div className="flex items-center">
          <span className="mr-2">税区分: </span>
          <span>{taxType}</span>
          <div className="flex items-center ml-4">
            <span className="mr-2">消費税率: </span>
            <select
              className="border rounded px-2 py-1"
              defaultValue={taxRate}
            >
              <option value={5}>5%</option>
              <option value={8}>8%</option>
              <option value={10}>10%</option>
            </select>
          </div>
        </div>
      </div>

      {/* Amount Information */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span>収納金額</span>
          <span>{receiptAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{taxAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>戻出金額</span>
          <input
            type="number"
            className="border rounded px-2 py-1 text-right"
            defaultValue={refundAmount}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
