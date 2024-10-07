import React from 'react';

type FormProps = {
  date: string;
  summary: string;
  individualNumber: number;
  amount: number;
  consumptionTaxAmount: number;
  taxIncludedAmount: number;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

export const AccountingForm: React.FC<FormProps> = ({
  date,
  summary,
  individualNumber,
  amount,
  consumptionTaxAmount,
  taxIncludedAmount,
  onChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h1 className="text-lg font-bold mb-4">特定収入額修正入力</h1>
      <div className="mb-2">
        <label className="block text-gray-700">伝票日付:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onChange('date', e.target.value)}
          className="border rounded p-1 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">摘要:</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => onChange('summary', e.target.value)}
          className="border rounded p-1 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">個別調定番号:</label>
        <input
          type="number"
          value={individualNumber}
          onChange={(e) => onChange('individualNumber', Number(e.target.value))}
          className="border rounded p-1 w-full"
        />
      </div>
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">税込金額:</label>
          <input
            type="number"
            value={taxIncludedAmount}
            onChange={(e) => onChange('taxIncludedAmount', Number(e.target.value))}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">消費税額:</label>
          <input
            type="number"
            value={consumptionTaxAmount}
            onChange={(e) => onChange('consumptionTaxAmount', Number(e.target.value))}
            className="border rounded p-1 w-full"
          />
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};
