// components/AccountingForm.tsx
import React from 'react';

type AccountingFormProps = {
  fiscalYear: string;
  processingDate: string;
  orderNumber: string;
  paymentAmount: number;
  advancePayment: number;
  changeSummary: string;
  contractDate: string;
  onFormSubmit: (data: any) => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  fiscalYear,
  processingDate,
  orderNumber,
  paymentAmount,
  advancePayment,
  changeSummary,
  contractDate,
  onFormSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFormSubmit({
      fiscalYear,
      processingDate,
      orderNumber,
      paymentAmount,
      advancePayment,
      changeSummary,
      contractDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">負担番号</label>
        <input
          type="text"
          value={orderNumber}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">支払金額</label>
        <input
          type="number"
          value={paymentAmount}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">前払金額</label>
        <input
          type="number"
          value={advancePayment}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">変更摘要</label>
        <input
          type="text"
          value={changeSummary}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">契約日</label>
        <input
          type="date"
          value={contractDate}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        OK
      </button>
    </form>
  );
};

export default AccountingForm;
