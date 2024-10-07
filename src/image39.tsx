// pages/InvoiceForm.tsx

import React from 'react';

type InvoiceFormProps = {
  fiscalYear: string;
  voucherNumber: number;
  date: string;
  summary: string;
  includingTaxAmount: number;
  excludingTaxAmount: number;
  taxAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  fiscalYear,
  voucherNumber,
  date,
  summary,
  includingTaxAmount,
  excludingTaxAmount,
  taxAmount,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="max-w-md p-4 mx-auto bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <div>{fiscalYear}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">振替番号</label>
        <div>{voucherNumber}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">伝票日付</label>
        <div>{date}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">摘要</label>
        <div>{summary}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">税込金額</label>
        <div>{includingTaxAmount.toLocaleString()}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">税抜金額</label>
        <div>{excludingTaxAmount.toLocaleString()}</div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">消費税額</label>
        <div>{taxAmount.toLocaleString()}</div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
