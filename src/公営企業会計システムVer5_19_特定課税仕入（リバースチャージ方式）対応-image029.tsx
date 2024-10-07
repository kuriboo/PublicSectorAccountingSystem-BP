import React from 'react';

type TaxFormProps = {
  year: number;
  voucherNumber: string;
  date: string;
  totalTaxIncluded: number;
  totalTaxExcluded: number;
  consumptionTaxAmount: number;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  year,
  voucherNumber,
  date,
  totalTaxIncluded,
  totalTaxExcluded,
  consumptionTaxAmount,
  onChange,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-6 border rounded-md shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <span className="mr-2">平成</span>
        <input
          type="text"
          value={year}
          className="border px-2 py-1"
          onChange={(e) => onChange('year', e.target.value)}
        />
        <span className="ml-2">年度</span>
      </div>
      <div className="mb-4">
        <label className="block mb-1">振替番号</label>
        <input
          type="text"
          value={voucherNumber}
          className="border px-2 py-1"
          onChange={(e) => onChange('voucherNumber', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">伝票日付</label>
        <input
          type="text"
          value={date}
          className="border px-2 py-1"
          onChange={(e) => onChange('date', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">摘要</label>
        <input
          type="text"
          className="border px-2 py-1 w-full"
          onChange={(e) => onChange('description', e.target.value)}
        />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        <div className="text-center">
          <span>税込金額</span>
          <div>{totalTaxIncluded}</div>
        </div>
        <div className="text-center">
          <span>税抜金額</span>
          <div>{totalTaxExcluded}</div>
        </div>
        <div className="text-center">
          <span>消費税額</span>
          <div>{consumptionTaxAmount}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-300 px-4 py-2 mr-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 px-4 py-2 mr-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
```