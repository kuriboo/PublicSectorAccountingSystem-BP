import React from 'react';

// TypeScript interface for component props
interface TaxAdjustmentFormProps {
  taxRateOptions: number[];
  selectedTaxRate: number;
  revenueDivisionOptions: string[];
  selectedRevenueDivision: string;
  taxBaseAmount: number;
  provisionalTaxAmount: number;
  onTaxRateChange: (rate: number) => void;
  onRevenueDivisionChange: (division: string) => void;
  onTaxBaseAmountChange: (amount: number) => void;
  onProvisionalTaxAmountChange: (amount: number) => void;
  onSubmit: () => void;
  onClear: () => void;
}

// React component with Tailwind CSS for styling
const TaxAdjustmentForm: React.FC<TaxAdjustmentFormProps> = ({
  taxRateOptions,
  selectedTaxRate,
  revenueDivisionOptions,
  selectedRevenueDivision,
  taxBaseAmount,
  provisionalTaxAmount,
  onTaxRateChange,
  onRevenueDivisionChange,
  onTaxBaseAmountChange,
  onProvisionalTaxAmountChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">予算課税標準額調整入力</h2>
      
      <div className="mb-4">
        <label className="block mb-2">集計先消費税率</label>
        <select
          value={selectedTaxRate}
          onChange={(e) => onTaxRateChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          {taxRateOptions.map((rate) => (
            <option key={rate} value={rate}>
              {rate}%
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">集計先収入区分</label>
        <select
          value={selectedRevenueDivision}
          onChange={(e) => onRevenueDivisionChange(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {revenueDivisionOptions.map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">課税標準額</label>
        <input
          type="number"
          value={taxBaseAmount}
          onChange={(e) => onTaxBaseAmountChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
          placeholder="0 円"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">仮払消費税額</label>
        <input
          type="number"
          value={provisionalTaxAmount}
          onChange={(e) => onProvisionalTaxAmountChange(Number(e.target.value))}
          className="border p-2 rounded w-full"
          placeholder="0 円"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TaxAdjustmentForm;
```