import React from 'react';

// Props type definition
type PaymentConditionFormProps = {
  initialPayment: string;
  paymentTimes: number;
  consumptionTaxRate: number;
  totalAmount: number;
  taxIncludedAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  startYearMonthDay: string;
  period: number;
  completionYearMonthDay: string;
  contractGuaranteeRate: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Functional Component with props
const PaymentConditionForm: React.FC<PaymentConditionFormProps> = ({
  initialPayment,
  paymentTimes,
  consumptionTaxRate,
  totalAmount,
  taxIncludedAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
  startYearMonthDay,
  period,
  completionYearMonthDay,
  contractGuaranteeRate,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">支払条件/工期</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block mb-1">前払金</label>
          <input
            type="text"
            defaultValue={initialPayment}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">支払回数</label>
          <input
            type="number"
            defaultValue={paymentTimes}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">消費税率</label>
          <select
            defaultValue={consumptionTaxRate}
            className="border rounded px-2 py-1 w-full"
          >
            <option value={5}>5%</option>
            <option value={8}>8%</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1">設計金額</label>
          <input
            type="number"
            defaultValue={taxIncludedAmount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">税抜額</label>
          <input
            type="number"
            defaultValue={taxExcludedAmount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">消費税額</label>
          <input
            type="number"
            defaultValue={consumptionTaxAmount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1">着年月日</label>
          <input
            type="text"
            defaultValue={startYearMonthDay}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">期間</label>
          <input
            type="number"
            defaultValue={period}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">完了予定年月日</label>
          <input
            type="text"
            defaultValue={completionYearMonthDay}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">契約保証率</label>
        <input
          type="number"
          step="0.01"
          defaultValue={contractGuaranteeRate}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentConditionForm;
