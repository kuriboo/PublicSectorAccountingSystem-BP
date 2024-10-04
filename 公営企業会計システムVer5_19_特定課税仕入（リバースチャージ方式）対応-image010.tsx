```tsx
// components/ManageInvoiceForm.tsx
import React from 'react';

type ManageInvoiceFormProps = {
  fiscalYear: number;
  transferNumber: number;
  invoiceDate: string;
  summary: string;
  totalAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ManageInvoiceForm: React.FC<ManageInvoiceFormProps> = ({
  fiscalYear,
  transferNumber,
  invoiceDate,
  summary,
  totalAmount,
  taxExcludedAmount,
  consumptionTax,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <div className="mb-4">
        <div className="flex justify-between">
          <label className="font-bold">年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">振替番号:</label>
          <span>{transferNumber}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">伝票日付:</label>
          <span>{invoiceDate}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">摘要:</label>
          <span>{summary}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">税込金額:</label>
          <span>{totalAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">税抜金額:</label>
          <span>{taxExcludedAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <label className="font-bold">消費税額:</label>
          <span>{consumptionTax.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ManageInvoiceForm;
```