import React from 'react';

// TypeScript interfaces for component props
interface ContractFormProps {
  contractDate: string;
  contractor: string;
  contractNumber: number;
  contractMethod: string;
  initialAmount: number;
  paymentTimes: number;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const ContractForm: React.FC<ContractFormProps> = ({
  contractDate,
  contractor,
  contractNumber,
  contractMethod,
  initialAmount,
  paymentTimes,
  startDate,
  endDate,
  location,
  summary,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 w-full max-w-lg mx-auto bg-white border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">契約報告入力</h2>
      <form>
        {/* Contract Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">契約年月日</label>
          <input
            type="text"
            value={contractDate}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Contract Number */}
        <div className="mb-4">
          <label className="block font-medium mb-1">契約番号</label>
          <input
            type="number"
            value={contractNumber}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Contract Method */}
        <div className="mb-4">
          <label className="block font-medium mb-1">契約方法</label>
          <input
            type="text"
            value={contractMethod}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Initial Amount */}
        <div className="mb-4">
          <label className="block font-medium mb-1">前払金額</label>
          <input
            type="number"
            value={initialAmount}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Payment Times */}
        <div className="mb-4">
          <label className="block font-medium mb-1">支払回数</label>
          <input
            type="number"
            value={paymentTimes}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">着手日</label>
          <input
            type="text"
            value={startDate}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">完了日</label>
          <input
            type="text"
            value={endDate}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block font-medium mb-1">工事名場所</label>
          <input
            type="text"
            value={location}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label className="block font-medium mb-1">摘要</label>
          <textarea
            value={summary}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Contractor */}
        <div className="mb-6">
          <label className="block font-medium mb-1">相手先</label>
          <input
            type="text"
            value={contractor}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="bg-gray-200 text-black px-4 py-2 rounded shadow"
          >
            クリア
          </button>
          <button
            type="button"
            onClick={onFinish}
            className="bg-red-500 text-white px-4 py-2 rounded shadow"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractForm;
```