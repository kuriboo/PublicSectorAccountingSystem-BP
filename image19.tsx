```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript interface for component props
interface TaxCalculatorProps {
  decisionAmount: number;
  taxExcludedAmount: number;
  consumptionTaxRate: number;
  otherTaxRate: number;
  onDecisionAmountChange?: (value: number) => void;
  onTaxExcludedAmountChange?: (value: number) => void;
  onConsumptionTaxAmountChange?: (value: number) => void;
  onOtherTaxAmountChange?: (value: number) => void;
}

// Create a functional component using TypeScript
const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  decisionAmount,
  taxExcludedAmount,
  consumptionTaxRate,
  otherTaxRate,
  onDecisionAmountChange,
  onTaxExcludedAmountChange,
  onConsumptionTaxAmountChange,
  onOtherTaxAmountChange,
}) => {
  // Calculate tax amounts
  const consumptionTaxAmount = (taxExcludedAmount * consumptionTaxRate) / 100;
  const otherTaxAmount = (taxExcludedAmount * otherTaxRate) / 100;

  return (
    <div className="p-4 bg-white border rounded shadow-sm">
      <div className="mb-4">
        <label className="block text-gray-700">決定額</label>
        <input
          type="number"
          value={decisionAmount}
          onChange={(e) => onDecisionAmountChange?.(parseInt(e.target.value, 10))}
          className="w-full px-2 py-1 border"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">税抜額</label>
        <input
          type="number"
          value={taxExcludedAmount}
          onChange={(e) => onTaxExcludedAmountChange?.(parseInt(e.target.value, 10))}
          className="w-full px-2 py-1 border"
        />
      </div>

      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 mr-2">消費税率</label>
        <input
          type="number"
          value={consumptionTaxRate}
          readOnly
          className="w-14 px-2 py-1 border"
        />
        <span className="ml-1">%</span>
        <input
          type="number"
          value={consumptionTaxAmount}
          onChange={(e) => onConsumptionTaxAmountChange?.(parseInt(e.target.value, 10))}
          className="ml-4 flex-1 px-2 py-1 border"
        />
      </div>

      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 mr-2">他税率</label>
        <input
          type="number"
          value={otherTaxRate}
          readOnly
          className="w-14 px-2 py-1 border"
        />
        <span className="ml-1">%</span>
        <input
          type="number"
          value={otherTaxAmount}
          onChange={(e) => onOtherTaxAmountChange?.(parseInt(e.target.value, 10))}
          className="ml-4 flex-1 px-2 py-1 border"
        />
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">摘要</button>
    </div>
  );
};

export default TaxCalculator;
```