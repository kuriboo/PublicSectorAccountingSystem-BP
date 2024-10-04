```tsx
import React from 'react';

type FormProps = {
  fiscalYear: string;
  number: string;
  paymentLimit: string;
  summary: string;
  hasDocument: boolean;
  amount: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const InvoiceForm: React.FC<FormProps> = ({
  fiscalYear,
  number,
  paymentLimit,
  summary,
  hasDocument,
  amount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">納入通知書再発行入力</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">年度:</label>
          <input
            type="text"
            value={fiscalYear}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">調定番号:</label>
          <input
            type="text"
            value={number}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">納入期限:</label>
          <input
            type="text"
            value={paymentLimit}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">摘要:</label>
          <input
            type="text"
            value={summary}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div className="mb-4">
          <span className="block text-sm font-medium">書類有無:</span>
          <div className="mt-1 flex items-center">
            <input
              type="radio"
              checked={hasDocument}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              readOnly
            />
            <label className="ml-2">有</label>
            <input
              type="radio"
              checked={!hasDocument}
              className="ml-4 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              readOnly
            />
            <label className="ml-2">無</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">料金:</label>
          <input
            type="number"
            value={amount}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
```