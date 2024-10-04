```tsx
import React from 'react';

interface TaxFormProps {
  totalAmount: number;
  taxExcludedAmount: number;
  consumptionTaxRate: number;
  otherTaxRate: number;
  onSummaryClick: () => void;
}

const TaxForm: React.FC<TaxFormProps> = ({
  totalAmount,
  taxExcludedAmount,
  consumptionTaxRate,
  otherTaxRate,
  onSummaryClick
}) => {
  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      {/* Total Amount */}
      <div className="mb-2">
        <label className="text-blue-700 font-semibold">決定額:</label>
        <span className="ml-2">{totalAmount.toLocaleString()}</span>
      </div>

      {/* Tax Excluded Amount */}
      <div className="mb-2">
        <label className="text-blue-700 font-semibold">税抜額:</label>
        <span className="ml-2">{taxExcludedAmount.toLocaleString()}</span>
      </div>

      {/* Consumption Tax Rate */}
      <div className="mb-2 flex items-center">
        <label className="text-blue-700 font-semibold">消費税率:</label>
        <input
          type="number"
          value={consumptionTaxRate}
          className="w-12 mx-1 border text-center"
          readOnly
        />
        <span>%</span>
      </div>

      {/* Consumption Tax Amount (calculated) */}
      <div className="mb-2 flex items-center">
        <label className="mr-2">消費税額:</label>
        <input
          type="number"
          value={(taxExcludedAmount * consumptionTaxRate / 100).toFixed(2)}
          className="w-full border"
          readOnly
        />
      </div>

      {/* Other Tax Rate */}
      <div className="mb-2 flex items-center">
        <label className="text-blue-700 font-semibold">他税率:</label>
        <input
          type="number"
          value={otherTaxRate}
          className="w-12 mx-1 border text-center"
          readOnly
        />
        <span>%</span>
      </div>

      {/* Other Tax Amount (calculated) */}
      <div className="mb-2 flex items-center">
        <label className="mr-2">他税額:</label>
        <input
          type="number"
          value={(taxExcludedAmount * otherTaxRate / 100).toFixed(2)}
          className="w-full border"
          readOnly
        />
      </div>

      {/* Summary Button */}
      <button
        className="bg-purple-500 text-white py-2 px-4 rounded mt-4"
        onClick={onSummaryClick}
      >
        概要
      </button>
    </div>
  );
};

export default TaxForm;
```