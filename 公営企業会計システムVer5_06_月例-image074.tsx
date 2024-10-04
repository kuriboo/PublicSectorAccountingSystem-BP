```tsx
import React from 'react';

type ConsumptionTaxFormProps = {
  startDate: string;
  endDate: string;
  budgetAccountStart: string;
  budgetAccountEnd: string;
  taxRate: number;
  reductionEnabled: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ConsumptionTaxForm: React.FC<ConsumptionTaxFormProps> = ({
  startDate,
  endDate,
  budgetAccountStart,
  budgetAccountEnd,
  taxRate,
  reductionEnabled,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold mb-4">消費税計算明細書作成</h1>
      <div className="mb-4">
        <label className="block font-medium">伝票日付</label>
        <div>
          <input
            type="date"
            value={startDate}
            className="border px-2 py-1"
          />
          <span className="mx-2">～</span>
          <input
            type="date"
            value={endDate}
            className="border px-2 py-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">予算科目</label>
        <div>
          <input
            type="text"
            value={budgetAccountStart}
            className="border px-2 py-1"
          />
          <span className="mx-2">～</span>
          <input
            type="text"
            value={budgetAccountEnd}
            className="border px-2 py-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">税率</label>
        <div>
          <input
            type="number"
            value={taxRate}
            className="border px-2 py-1 w-16"
          />
          <span className="ml-2">%</span>
          <label className="inline-flex items-center ml-4">
            <input
              type="checkbox"
              checked={reductionEnabled}
              className="form-checkbox"
            />
            <span className="ml-2">軽減税率</span>
          </label>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ConsumptionTaxForm;
```